/* ============================================================
   utils.js — Shared helpers for every section script
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const pad2 = (n) => String(n).padStart(2, "0");

/* Block renderers (open for extension, closed for modification):
   add a new block type with registerBlock("type", (block) => html)
   instead of editing sectionBlockHTML. */
const BLOCK_RENDERERS = {};
const registerBlock = (type, render) => { BLOCK_RENDERERS[type] = render; };

registerBlock("text", (b) =>
  `<div class="block"><p class="block-label">${b.label}</p><p class="block-text">${b.body}</p></div>`);
registerBlock("chips", (b) =>
  `<div class="block"><p class="block-label">${b.label}</p><div class="chips">${b.items
    .map((i) => `<span class="chip">${i}</span>`)
    .join("")}</div></div>`);
registerBlock("facts", (b) =>
  `<div class="block"><p class="block-label">${b.label}</p><dl class="facts">${b.facts
    .map(([k, v, href]) => `<div class="fact"><dt>${k}</dt><dd>${href
      ? `<a href="${href}" target="_blank" rel="noopener">${v}</a>`
      : v}</dd></div>`)
    .join("")}</dl></div>`);
registerBlock("links", (b) =>
  `<div class="block"><p class="block-label">${b.label}</p><div class="${b.compact ? "links compact" : "links"}">${b.items
    .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`)
    .join("")}</div></div>`);

function sectionBlockHTML(block) {
  const render = BLOCK_RENDERERS[block.type];
  return render ? render(block) : "";
}

/* Loads a Markdown data file made of "a :: b :: c" lines.
   Blank lines and lines starting with # are ignored.
   Needs the http server (fetch does not work over file://). */
async function loadMdRows(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return (await response.text())
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => line.split("::").map((cell) => cell.trim()));
}

/* Shared boilerplate for every carousel panel.
   `blocks` may be an array or a function returning a promise of one
   (for content loaded from .md files). Resolves to the carousel handle. */
async function mountSection(name, meta, blocks, options = {}) {
  const body = $(`[data-section="${name}"]`);
  if (!body) return null;
  const panel = body.closest(".panel");
  panel.querySelector("[data-section-title]").textContent = meta.title;
  panel.querySelector("[data-section-note]").textContent = meta.note;
  try {
    const items = typeof blocks === "function" ? await blocks() : blocks;
    return renderSectionCarousel(body, meta.title, items, options);
  } catch (error) {
    console.error(`Section "${name}" failed to load:`, error);
    body.innerHTML = `<p class="block-text">No se pudo cargar este contenido. Abre el sitio con un servidor local (python3 -m http.server).</p>`;
    return null;
  }
}

function renderSectionCarousel(body, title, blocks, options = {}) {
  if (!blocks.length) throw new Error(`Carousel "${title}" requires at least one item.`);
  const renderBlock = options.renderBlock || sectionBlockHTML;
  const showIndicators = options.showIndicators !== false;
  const autoRotate = options.autoRotate !== false;

  body.innerHTML = `
    <div class="section-carousel-slide" data-section-slide aria-live="polite"></div>
    <div class="section-carousel-controls">
      <button type="button" class="section-carousel-arrow" data-section-prev aria-label="Anterior: ${title}">‹</button>
      ${showIndicators ? '<span class="section-carousel-counter" data-section-counter></span>' : ""}
      <button type="button" class="section-carousel-arrow" data-section-next aria-label="Siguiente: ${title}">›</button>
    </div>
    ${showIndicators ? `<div class="section-carousel-dots" role="group" aria-label="Secciones de ${title}" data-section-dots></div>` : ""}`;

  const slide = $("[data-section-slide]", body);
  const counter = $("[data-section-counter]", body);
  const dots = showIndicators ? blocks.map((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "section-carousel-dot";
    button.setAttribute("aria-label", `Mostrar elemento ${index + 1} de ${blocks.length}`);
    button.addEventListener("click", () => {
      show(index);
      schedule();
    });
    $("[data-section-dots]", body).append(button);
    return button;
  }) : [];

  let index = 0;
  let timer;
  let paused = false;

  function show(nextIndex) {
    index = (nextIndex + blocks.length) % blocks.length;
    slide.innerHTML = renderBlock(blocks[index]);
    if (counter) counter.textContent = `${pad2(index + 1)} / ${pad2(blocks.length)}`;
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  }

  function schedule() {
    clearInterval(timer);
    if (autoRotate && !paused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => show(index + 1), 10000);
    }
  }

  $("[data-section-prev]", body).addEventListener("click", () => {
    show(index - 1);
    schedule();
  });
  $("[data-section-next]", body).addEventListener("click", () => {
    show(index + 1);
    schedule();
  });
  body.addEventListener("pointerenter", () => {
    paused = true;
    clearInterval(timer);
  });
  body.addEventListener("pointerleave", () => {
    paused = false;
    schedule();
  });
  body.addEventListener("focusin", () => {
    paused = true;
    clearInterval(timer);
  });
  body.addEventListener("focusout", (event) => {
    if (!body.contains(event.relatedTarget)) {
      paused = false;
      schedule();
    }
  });

  show(0);
  schedule();
  return { show, schedule };
}
