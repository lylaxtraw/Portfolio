/* ============================================================
   socials.js — Rows 1-2: social media cells (data + render).
   Each cell: icon (redirects to the page/user) + app-colored
   label below (F2 · S3 · Color App).
   ============================================================ */

const SOCIALS = [
  // TODO: replace with your real address.
  { id: "mail",      label: "Mail",      color: "var(--app-mail)",      href: "mailto:correo@ejemplo.com" },
  { id: "instagram", label: "Instagram", color: "var(--app-instagram)", href: "https://www.instagram.com/lylaxtraw/" },
  { id: "facebook",  label: "Facebook",  color: "var(--app-facebook)",  href: "https://www.facebook.com/lylaxtraw/" },
  { id: "x",         label: "X",         color: "var(--app-x)",         href: "https://x.com/SalxianPayaxin" },
  { id: "whatsapp",  label: "WhatsApp",  color: "var(--app-whatsapp)",  href: "https://wa.me/52282859882" },
  { id: "linkedin",  label: "LinkedIn",  color: "var(--app-linkedin)",  href: "https://www.linkedin.com/in/lylaxtraw" },
];

(function () {
  document.querySelectorAll("[data-social]").forEach((cell) => {
    const data = SOCIALS.find((s) => s.id === cell.dataset.social);
    if (!data) return;
    cell.href = data.href;
    cell.target = "_blank";
    cell.rel = "noopener";
    cell.style.setProperty("--cell-color", data.color);
    cell.innerHTML = `<span class="icon">${ICONS[data.id] || ""}</span><span class="label">${data.label}</span>`;
  });
})();
