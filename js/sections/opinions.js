/* ============================================================
   opinions.js — Rows 5-6, cols 8-10: Opiniones.
   Feed of quotes from friends/classmates (old Webpage). Each opinion keeps its
   author's picture + a link to their social media.
   ============================================================ */

const OPINIONS_META = {
  title: "Opiniones",
  note: "Lo que dicen quienes me conocen",
};

// Content lives in public/opinion.md (id :: text) and public/social_link.md
// (id :: who :: href :: photo). Rows are joined by id.
const PFP_BASE = "img/pfp/";

async function loadOpinions() {
  const [texts, socials] = await Promise.all([
    loadMdRows("public/opinion.md"),
    loadMdRows("public/social_link.md"),
  ]);
  const socialById = new Map(socials.map(([id, who, href, img]) => [id, { who, href, img }]));
  return texts
    .filter(([id]) => socialById.has(id))
    .map(([id, text]) => ({ text, ...socialById.get(id) }));
}

mountSection("opinions", OPINIONS_META, loadOpinions, {
  renderBlock: (opinion) => `
    <figure class="opinion">
      <img class="opinion-avatar" src="${PFP_BASE + encodeURIComponent(opinion.img)}" alt="Foto de ${opinion.who}" loading="lazy" />
      <figcaption>
        <blockquote class="opinion-text">“${opinion.text}”</blockquote>
        <a class="opinion-who" href="${opinion.href}" target="_blank" rel="noopener">— ${opinion.who}</a>
      </figcaption>
    </figure>`,
}).then(() => {
  const list = $('[data-section="opinions"]');
  if (!list || $(".opinion-submit", list)) return;
  const submitButton = document.createElement("button");
  submitButton.type = "button";
  submitButton.className = "opinion-submit";
  submitButton.textContent = "¡Escribe la tuya! · Próximamente";
  submitButton.title = "Próximamente podrás enviar tu opinión, red social y foto.";
  submitButton.disabled = true;
  list.append(submitButton);
});
