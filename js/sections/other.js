/* ============================================================
   other.js — Rows 3-4, cols 8-10: Otros Trabajos.
   Non-coding work: papers, playlists, songs, etc.
   ============================================================ */

const OTHER_META = {
  title: "Otros Trabajos",
  note: "Papers, playlists y otras especies de obra",
};

// To add a group: add it here, then use its key in public/other_links.md.
const OTHER_GROUPS = {
  papers:    { label: "Papers" },
  playlists: { label: "Playlists “TP”", compact: true },
};

mountSection("other", OTHER_META, async () => {
  const rows = await loadMdRows("public/other_links.md");
  return Object.entries(OTHER_GROUPS).map(([key, group]) => ({
    type: "links",
    ...group,
    items: rows.filter(([g]) => g === key).map(([, text, href]) => ({ text, href })),
  }));
});
