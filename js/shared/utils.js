/* ============================================================
   utils.js — Shared helpers for every section script
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const pad2 = (n) => String(n).padStart(2, "0");

/* Renders one content block for the info panels.
   Block types: "text" | "chips" | "facts" | "links" */
function sectionBlockHTML(block) {
  switch (block.type) {
    case "text":
      return `<div class="block"><p class="block-label">${block.label}</p><p class="block-text">${block.body}</p></div>`;
    case "chips":
      return `<div class="block"><p class="block-label">${block.label}</p><div class="chips">${block.items
        .map((i) => `<span class="chip">${i}</span>`)
        .join("")}</div></div>`;
    case "facts":
      return `<div class="block"><p class="block-label">${block.label}</p><dl class="facts">${block.facts
        .map(([k, v]) => `<div class="fact"><dt>${k}</dt><dd>${v}</dd></div>`)
        .join("")}</dl></div>`;
    case "links": {
      const cls = block.compact ? "links compact" : "links";
      return `<div class="block"><p class="block-label">${block.label}</p><div class="${cls}">${block.items
        .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`)
        .join("")}</div></div>`;
    }
    default:
      return "";
  }
}
