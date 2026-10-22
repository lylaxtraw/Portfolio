/* ============================================================
   project.js — Renders html/project.html from PROJECTS (?p=<id>).
   Depends on: js/shared/utils.js ($, pad2) + js/sections/works.js
   (PROJECTS). This page lives inside html/, so relative asset
   paths get a "../" prefix.
   ============================================================ */

(function () {
  // e.g. "img/coming-soon.svg" → "../img/coming-soon.svg"
  const asset = (p) => (typeof p === "string" && p.startsWith("img/") ? "../" + p : p);

  const id = new URLSearchParams(location.search).get("p");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const root = $("[data-project-root]");
  const missing = $("[data-project-missing]");

  if (index === -1) {
    missing.hidden = false;
    document.title = "Proyecto no encontrado — Lyla Alice";
    return;
  }

  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  // Accent color drives the whole page (chips, kicker, glow, CTA)
  document.body.style.setProperty("--accent", p.accent);
  document.title = `${p.title} — Lyla Alice`;

  $("[data-project-kicker]").textContent = `Proyecto ${pad2(index + 1)} / ${pad2(PROJECTS.length)}`;
  $("[data-project-counter]").textContent = `${p.title}`;
  $("[data-project-title]").textContent = p.title;
  $("[data-project-tagline]").textContent = p.tagline;
  $("[data-project-cover]").src = asset(p.img);
  $("[data-project-cover]").alt = `Imagen de ${p.title}`;

  const link = $("[data-project-link]");
  link.href = p.link;
  link.textContent = p.linkLabel;

  $("[data-project-mission]").textContent = p.mission;
  $("[data-project-vision]").textContent = p.vision;
  $("[data-project-challenges]").textContent = p.challenges;
  $("[data-project-purpose]").textContent = p.purpose;

  const fillChips = (sel, items) => {
    $(sel).innerHTML = items.map((i) => `<span class="chip">${i}</span>`).join("");
  };
  fillChips("[data-project-languages]", p.languages);
  fillChips("[data-project-disciplines]", p.disciplines);
  fillChips("[data-project-tools]", p.tools);

  // Gallery: hide the block entirely if the project has no extra pictures
  const gallery = $("[data-project-gallery]");
  if (p.gallery && p.gallery.length) {
    gallery.innerHTML = p.gallery
      .map((src) => `<img src="${asset(src)}" alt="Captura de ${p.title}" loading="lazy" />`)
      .join("");
  } else {
    $("[data-project-gallery-card]").hidden = true;
  }

  $("[data-project-prev]").href = `project.html?p=${prev.id}`;
  $("[data-project-prev]").textContent = `\u2190 ${prev.title}`;
  $("[data-project-next]").href = `project.html?p=${next.id}`;
  $("[data-project-next]").textContent = `${next.title} \u2192`;

  root.hidden = false;
})();
