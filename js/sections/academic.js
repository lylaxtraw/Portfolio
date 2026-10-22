/* ============================================================
   academic.js — Rows 7-8, cols 1-3: Info Académica.
   Scholar work and formation, studies and accomplishments.
   ============================================================ */

const ACADEMIC = {
  title: "Info Académica",
  note: "Dónde me formo y qué he logrado",
  blocks: [
    { type: "facts", label: "Formación actual",
      facts: [
        ["Carrera", "Ingeniería en Instrumentación Electrónica"],
        ["Universidad", "Universidad Veracruzana"],
        ["Avance", "Quinto semestre · Bloque II"],
      ] },
    { type: "links", label: "Referencias",
      items: [
        { text: "Ubicación de la Facultad", href: "https://maps.app.goo.gl/Gss3EsRBvBt1WNuy7" },
      ] },
    { type: "text", label: "En curso",
      body: "Formación continua en desarrollo backend con Python/FastAPI, QA con TDD y arquitectura de software (SOLID, ADRs), manteniendo vivo el músculo de bajo nivel con C y electrónica." },
    { type: "text", label: "Logros recientes",
      body: "SensorHub: sistema completo con 96.85% de cobertura, CI/CD y despliegue en la nube. SlimeSpire: primer videojuego propio en desarrollo activo. Esta misma página: frontend hecho a mano, sin plantillas." },
  ],
};

(function () {
  const body = $('[data-section="academic"]');
  if (!body) return;
  const panel = body.closest(".panel");
  panel.querySelector("[data-section-title]").textContent = ACADEMIC.title;
  panel.querySelector("[data-section-note]").textContent = ACADEMIC.note;
  body.innerHTML = ACADEMIC.blocks.map(sectionBlockHTML).join("");
})();
