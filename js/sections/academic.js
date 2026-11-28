/* ============================================================
   academic.js — Rows 7-8, cols 1-3: Info Académica.
   Scholar work and formation, studies and accomplishments.
   ============================================================ */

const ACADEMIC = {
  title: "Scholar Work & Formation",
  note: "",
  blocks: [
    { type: "facts", label: "Current Studies",
      facts: [
        ["Career", "N/A"],
        ["University", "N/A"],
        ["Progress", "N/A"],
      ] },
    { type: "links", label: "References",
      items: [
        { text: "Faculty Location", href: "N/A" },
      ] },
    { type: "text", label: "Not Studying",
      body: "Continuous formation in backend development with Python/FastAPI, QA with TDD and software architecture (SOLID, ADRs), keeping the low-level muscle alive with C and electronics." },
    { type: "text", label: "Recent Achievements",
      body: "SensorHub: complete system with 96.85% coverage, CI/CD and cloud deployment. SlimeSpire: first own video game in active development. This very page: handcrafted frontend, no templates." },
  ],
};

mountSection("academic", ACADEMIC, ACADEMIC.blocks);
