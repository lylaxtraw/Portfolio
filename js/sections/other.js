/* ============================================================
   other.js — Rows 3-4, cols 8-10: Otros Trabajos.
   Non-coding work: papers, playlists, songs, etc.
   ============================================================ */

const OTHER = {
  title: "Otros Trabajos",
  note: "Papers, playlists y otras especies de obra",
  blocks: [
    { type: "links", label: "Papers",
      items: [
        { text: "Cómo Minecraft influyó en mi vida", href: "https://uvmx-my.sharepoint.com/:w:/g/personal/zs24013157_estudiantes_uv_mx/EdJ9tbF1baBLh5--Puonos8B-6BKsZ4xthl3Xh82gsEw-g?e=GMHNhd" },
        { text: "El Estatuto, El Alumnado y El Censurado", href: "https://uvmx-my.sharepoint.com/:w:/g/personal/zs24013157_estudiantes_uv_mx/ETSwa7OgYohJhtE8SXiroaIBDNqbUS7uydE6LPj9oB54hA?e=lvriR9" },
      ] },
    { type: "links", label: "Playlists “TP”",
      compact: true,
      items: [
        { text: "Niche Narcissists", href: "https://open.spotify.com/playlist/77OYkTplqSOjCYPcUU6cGj" },
        { text: "Wrath's Way", href: "https://open.spotify.com/playlist/6FKAt27u0h9Pdff1CvYD8I" },
        { text: "Chill Chimes", href: "https://open.spotify.com/playlist/6vxdQesTD5rBjSFxP5m5Ju" },
        { text: "Lover's Law", href: "https://open.spotify.com/playlist/0wiIOpWiaHwcjiw9LrEUiD" },
        { text: "Freaky Freaks", href: "https://open.spotify.com/playlist/770LI3Qy9uq5XluD6FmPSa" },
        { text: "Just Jazz", href: "https://open.spotify.com/playlist/1Od3UqPTldXzM5zlTPSHBp" },
        { text: "Resonance of Rock", href: "https://open.spotify.com/playlist/5Ctl9QlutwRdhCMLQD6h3t" },
        { text: "Dancing Days", href: "https://open.spotify.com/playlist/7kIVivRacCHIkEuaBRCsTZ" },
        { text: "Mystical Memories", href: "https://open.spotify.com/playlist/6XMInB1jF2x6rfF9rjPIST" },
        { text: "Sorrows of Solitude", href: "https://open.spotify.com/playlist/4LUojW39jxkvt7RFgKKwhc" },
        { text: "Happy Hops", href: "https://open.spotify.com/playlist/0aTJGbiytea7aRwyIssRq6" },
        { text: "Karaoke Knights", href: "https://open.spotify.com/playlist/6anpLyzOc6lN8tYGtOJL9M" },
      ] },
  ],
};

(function () {
  const body = $('[data-section="other"]');
  if (!body) return;
  const panel = body.closest(".panel");
  panel.querySelector("[data-section-title]").textContent = OTHER.title;
  panel.querySelector("[data-section-note]").textContent = OTHER.note;
  body.innerHTML = OTHER.blocks.map(sectionBlockHTML).join("");
})();
