/* ============================================================
   professional.js — Rows 3-4, cols 1-3: Info Profesional (CV).
   Everything public that belongs in a CV. Contrasting colors, F3.
   ============================================================ */

const PROFESSIONAL = {
  title: "Professional Information",
  note: "",
  // body blocks: type "text" | "chips" | "links" | "facts"
  blocks: [
    { type: "text", label: "Role",
      body: "Backend Developer (in development) with a background in Electronics Engineering. Transitioning from low-level hardware and embedded C to robust, scalable, and secure REST APIs, websites, and video games." },
    { type: "text", label: "Star Project — SensorHub",
      body: "Modular monolith in 4 layers isolating the logic with Dependency Inversion (DIP). 96.85% coverage with strict TDD and fake repositories in RAM to simulate the physical hardware. Dockerized (multi-stage), orchestrated with GitHub Actions, scanned with Trivy and deployed on Render." },
    { type: "text", label: "Decisions with Criteria",
      body: "PATCH instead of PUT (ADR-0002): not forcing the microcontroller to send large payloads just to update a threshold. Saving bandwidth and battery is a priority." },
    { type: "chips", label: "Backend & Software",
      items: ["Python 3.12+", "FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "Lua", "HTML", "CSS", "JS"] },
    { type: "chips", label: "QA & Testing",
      items: ["Pytest", "Mypy", "Ruff", "TDD", "SOLID"] },
    { type: "chips", label: "Infrastructure",
      items: ["Docker", "CI/CD with GitHub Actions", "PostgreSQL", "Render", "Trivy", "GitHub Pages"] },
    { type: "chips", label: "Hardware & Low Level",
      items: ["C", "Microcontrollers", "Serial Protocols", "IoT Sensors"] },
  ],
};

mountSection("professional", PROFESSIONAL, PROFESSIONAL.blocks);
