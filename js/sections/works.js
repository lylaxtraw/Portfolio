/* ============================================================
   works.js — Rows 3-8, cols 4-7: rotating project showcase.
   PROJECTS holds the data for every project; it is also read by
   html/project.html (via js/pages/project.js) to build the
   detail pages. Slides link to html/project.html?p=<id>.
   ============================================================ */

const PROJECTS = [
  {
    id: "sensorhub",
    title: "SensorHub API",
    tagline: "La API de un hub de sensores: fácil de programar, entender y operar",
    synopsis: "Backend para dispositivos embebidos en bodegas industriales. Monolito modular en 4 capas (DIP), 96.85% de cobertura con TDD estricto, dockerizado y desplegado con CI/CD.",
    accent: "#38bdf8",
    font: "f3",
    img: "https://opengraph.githubassets.com/1/CherryStraw5337/Sensorhub-API---CherryStraw",
    link: "https://github.com/CherryStraw5337/Sensorhub-API---CherryStraw",
    linkLabel: "Explorar el código fuente",
    mission: "Resolver un problema real: la corrupción de datos y la ineficiencia energética en dispositivos embebidos en bodegas industriales.",
    vision: "Ser una API que cualquier persona pueda programar, entender y operar sin sufrir: contratos claros, calidad medible y cero excusas para no testear.",
    challenges: "Simular el hardware físico con repositorios fake en memoria RAM; sostener 96.85% de cobertura con TDD estricto; y elegir PATCH sobre PUT (ADR-0002) para no obligar al microcontrolador a enviar payloads masivos solo para actualizar un umbral.",
    purpose: "Demostrar que el mundo embebido y el backend pueden hablarse con respeto: calidad industrial aplicada a software.",
    languages: ["Python 3.12+"],
    disciplines: ["Backend", "QA / TDD", "Arquitectura (DIP)", "DevOps", "IoT"],
    tools: ["FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "Pytest", "Docker", "GitHub Actions", "Trivy", "PostgreSQL", "Render"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/Sensorhub-API---CherryStraw",
      "img/coming-soon.svg",
    ],
  },
  {
    id: "solaris",
    title: "Solaris Monitoring",
    tagline: "Sistema integral IoT para el monitoreo en tiempo real de celdas fotovoltaicas",
    synopsis: "Telemetría de hardware conectada por MQTT a un backend en FastAPI para el análisis en tiempo real de celdas fotovoltaicas.",
    accent: "#fbbf24",
    font: "f2",
    img: "https://opengraph.githubassets.com/1/CherryStraw5337/Solaris-Monitoring",
    link: "https://github.com/CherryStraw5337/Solaris-Monitoring",
    linkLabel: "Explorar el código fuente",
    mission: "Monitorear en tiempo real la salud y producción de celdas fotovoltaicas, conectando la telemetría del hardware con el análisis del software.",
    vision: "Un sistema integral de punta a punta donde cada celda reporta su estado y cada dato termina en una decisión útil.",
    challenges: "Ingesta MQTT confiable, el ruido natural de los sensores físicos y llevar la señal desde el microcontrolador hasta un backend que la sepa escuchar.",
    purpose: "Llevar mi formación en instrumentación electrónica a un sistema IoT completo: del cable al dashboard.",
    languages: ["Python"],
    disciplines: ["IoT", "Backend", "Telemetría", "Instrumentación"],
    tools: ["MQTT", "FastAPI", "Docker", "Sensores"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/Solaris-Monitoring",
      "img/coming-soon.svg",
    ],
  },
  {
    id: "slimespire",
    title: "SlimeSpire",
    tagline: "Mi primer juego: un roguelike de combate estratégico con mucha inspiración de Balatro",
    synopsis: "Un juego que no se toma a sí mismo en serio, pero divierte. Roguelike de combate estratégico en Lua, jugable hasta niveles absurdos (naneinf-esc). En desarrollo activo.",
    accent: "#4ade80",
    font: "f1",
    img: "https://opengraph.githubassets.com/1/CherryStraw5337/SlimeSpire",
    link: "https://github.com/CherryStraw5337/SlimeSpire",
    linkLabel: "Explorar el código fuente",
    mission: "Construir mi primer juego completo: un roguelike de combate estratégico que se pueda escalar hasta niveles ridículos sin romperse.",
    vision: "Un juego honesto consigo mismo: no se toma a sí mismo en serio, pero divierte de verdad. Desarrollado en inglés y creciendo release tras release.",
    challenges: "Reaprender loops principales, gestión de estados y optimización de recursos: mis raíces de microcontroladores, ahora con la flexibilidad de Lua.",
    purpose: "Un side-project nacido por el simple gusto de programar.",
    languages: ["Lua"],
    disciplines: ["Game Development", "State Management", "Diseño de sistemas"],
    tools: ["Lua", "Git", "GitHub"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/SlimeSpire",
      "img/coming-soon.svg",
    ],
  },
  {
    id: "webpage",
    title: "Webpage",
    tagline: "Mi espacio personal en la web, hecho a mano y sin plantillas",
    synopsis: "Mi primer frontend construido desde cero para entender el ciclo completo del desarrollo web y tener un rincón propio en internet.",
    accent: "#f472b6",
    font: "f2",
    img: "https://opengraph.githubassets.com/1/lylaxtraw/Webpage",
    link: "https://github.com/lylaxtraw/Webpage",
    linkLabel: "Explorar el código fuente",
    mission: "Tener un lugar propio donde exponer mis ideas sin depender de plantillas prefabricadas.",
    vision: "Crecer de “bare bones” a portafolio profesional, iteración tras iteración y con el changelog a la vista.",
    challenges: "Salir de mi zona de confort natural (el backend, los datos y los electrones) para dominar HTML/CSS puro y el despliegue web con GitHub Pages.",
    purpose: "Entender el ciclo completo del desarrollo web, del primer <div> al deploy.",
    languages: ["HTML", "CSS"],
    disciplines: ["Frontend", "Web Deployment"],
    tools: ["GitHub Pages", "Git"],
    gallery: [
      "https://opengraph.githubassets.com/1/lylaxtraw/Webpage",
      "img/coming-soon.svg",
    ],
  },
];

/* ---------- Carousel (index.html only; guards itself elsewhere) ---------- */
(function () {
  const track = $("[data-track]");
  if (!track) return; // page without carousel (project.html): data only

  const works = track.closest(".works");
  const carousel = track.closest(".carousel");
  const dotsEl = $("[data-dots]");
  const counter = $("[data-counter]");
  const synopsis = $("[data-synopsis]");
  const synTagline = $("[data-synopsis-tagline]");
  const synText = $("[data-synopsis-text]");

  track.innerHTML = PROJECTS.map(
    (p) => `
    <a class="slide" href="html/project.html?p=${p.id}" aria-label="Ver proyecto ${p.title}">
      <img src="${p.img}" alt="Imagen de ${p.title}" loading="lazy" />
      <span class="slide-title">${p.title}</span>
    </a>`
  ).join("");

  dotsEl.innerHTML = PROJECTS.map((_, i) => `<button aria-label="Ir al proyecto ${i + 1}"></button>`).join("");
  const dots = [...dotsEl.children];

  let index = 0;
  let timer;

  function apply() {
    track.style.transform = `translateX(-${index * 100}%)`;
    counter.textContent = `${pad2(index + 1)} / ${pad2(PROJECTS.length)}`;
    dots.forEach((d, j) => d.classList.toggle("active", j === index));

    const p = PROJECTS[index];
    // Synopsis: color + font change per project (layout spec)
    works.style.setProperty("--accent", p.accent);
    synopsis.style.borderColor = p.accent;
    synopsis.style.background = `color-mix(in srgb, ${p.accent} 7%, transparent)`;
    synTagline.textContent = `${p.title} — ${p.tagline}`;
    synText.style.color = p.accent;
    synText.style.fontFamily = `var(--${p.font})`;
    synText.textContent = p.synopsis;
  }

  function go(i) {
    index = (i + PROJECTS.length) % PROJECTS.length;
    apply();
  }

  function schedule() {
    clearInterval(timer);
    timer = setInterval(() => go(index + 1), 10000); // rotate every 10s
  }

  $("[data-prev]").addEventListener("click", () => { go(index - 1); schedule(); });
  $("[data-next]").addEventListener("click", () => { go(index + 1); schedule(); });
  dots.forEach((d, j) => d.addEventListener("click", () => { go(j); schedule(); }));

  // Keyboard navigation + pause while hovering
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { go(index - 1); schedule(); }
    if (e.key === "ArrowRight") { go(index + 1); schedule(); }
  });
  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", schedule);
  document.addEventListener("visibilitychange", () =>
    document.hidden ? clearInterval(timer) : schedule()
  );

  apply();
  schedule();
})();
