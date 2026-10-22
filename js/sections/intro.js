/* ============================================================
   intro.js — Rows 1-2, cols 4-7: name + photo + starter text.
   Name: F1 · S1 · serious colors. Bio: F2 · S2.
   ============================================================ */

const PROFILE = {
  name: "Lyla Alice",
  fullName: "Lyla Alice Estrada Pulido",
  aka: "CherryStraw · lylaxtraw",
  // Small introductory text for the portfolio. May contain HTML.
  intro:
    "Electronics Engineer &amp; Backend Developer en desarrollo. Vengo del mundo donde un error quema una placa f&iacute;sica, " +
    "as&iacute; que me tomo la calidad y el dise&ntilde;o muy en serio. Hoy construyo APIs REST robustas, escalables y seguras, " +
    'sitios web y videojuegos. M&aacute;s de m&iacute; en <a href="https://github.com/lylaxtraw" target="_blank" rel="noopener">GitHub</a>.',
  // Replace with a local photo (e.g. "img/me.jpg"); the GitHub avatar is a stand-in.
  photo: "https://avatars.githubusercontent.com/lylaxtraw",
  github: "https://github.com/lylaxtraw",
  org: "https://github.com/CherryStraw5337",
};

(function () {
  const photo = $(".intro .photo");
  if (!photo) return;
  photo.src = PROFILE.photo;
  document.title = `${PROFILE.name} — Portfolio`;
  $(".intro .name").textContent = PROFILE.name;
  $(".intro .aka").textContent = PROFILE.aka;
  $(".intro .bio").innerHTML = PROFILE.intro;
})();
