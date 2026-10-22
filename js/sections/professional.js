/* ============================================================
   professional.js — Rows 3-4, cols 1-3: Info Profesional (CV).
   Everything public that belongs in a CV. Contrasting colors, F3.
   ============================================================ */

const PROFESSIONAL = {
  title: "Info Profesional",
  note: "Mi CV en modo rápido",
  // body blocks: type "text" | "chips" | "links" | "facts"
  blocks: [
    { type: "text", label: "Rol",
      body: "Backend Developer (en desarrollo) con base en Ingeniería en Instrumentación Electrónica. Transición del hardware de bajo nivel y C embebido hacia APIs REST robustas, escalables y seguras, sitios web y videojuegos." },
    { type: "text", label: "Proyecto estrella — SensorHub",
      body: "Monolito modular en 4 capas aislando la lógica con Inversión de Dependencias (DIP). 96.85% de cobertura con TDD estricto y repositorios fake en memoria RAM para simular el hardware físico. Dockerizado (multi-stage), orquestado con GitHub Actions, escaneo con Trivy y desplegado en Render." },
    { type: "text", label: "Decisiones con criterio",
      body: "PATCH en lugar de PUT (ADR-0002): no obligar al microcontrolador a enviar payloads masivos solo para actualizar un umbral. Salvar ancho de banda y batería es prioridad." },
    { type: "chips", label: "Backend & Software",
      items: ["Python 3.12+", "FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "Lua", "HTML", "CSS", "JS"] },
    { type: "chips", label: "QA & Testing",
      items: ["Pytest", "Mypy", "Ruff", "TDD", "SOLID"] },
    { type: "chips", label: "Infraestructura",
      items: ["Docker", "CI/CD con GitHub Actions", "PostgreSQL", "Render", "Trivy", "GitHub Pages"] },
    { type: "chips", label: "Hardware & Bajo Nivel",
      items: ["C", "Microcontroladores", "Protocolos seriales", "Sensores IoT"] },
  ],
};

mountSection("professional", PROFESSIONAL, PROFESSIONAL.blocks);
