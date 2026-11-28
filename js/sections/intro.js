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
    "Fullstack Developer & Game Developer en desarrollo " +
    "<a href='https://github.com/lylaxtraw' target='_blank' rel='noopener'>Perfil Github</a>",
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
