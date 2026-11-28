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
    tagline: "API built for embedded devices in industrial warehouses",
    synopsis: "Backend for embedded devices in industrial warehouses. Modular monolith in 4 layers (DIP), 96.85% coverage with strict TDD, containerized and deployed with CI/CD.",
    accent: "#38bdf8",
    font: "f3",
    img: "http://github.com/CherryStraw5337/Sensorhub-API---CherryStraw/blob/main/docs/logo.jpg?raw=true",
    link: "https://github.com/CherryStraw5337/Sensorhub-API---CherryStraw",
    linkLabel: "Explore the source code",
    mission: "Solve a real problem: data corruption and energy inefficiency in embedded devices in industrial warehouses.",
    vision: "Be an API that anyone can program, understand and operate without suffering: clear contracts, measurable quality and zero excuses for not testing.",
    challenges: "Simulate the physical hardware with fake repositories in RAM; maintain 96.85% coverage with strict TDD; and choose PATCH over PUT (ADR-0002) to avoid forcing the microcontroller to send massive payloads just to update a threshold.",
    purpose: "Demonstrate that the embedded world and backend can speak with respect: industrial quality applied to software.",
    languages: ["Python 3.12+"],
    disciplines: ["Backend", "QA / TDD", "Architecture (DIP)", "DevOps", "IoT"],
    tools: ["FastAPI", "SQLAlchemy 2.0", "Pydantic v2", "Pytest", "Docker", "GitHub Actions", "Trivy", "PostgreSQL", "Render"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/Sensorhub-API---CherryStraw",
      "img/coming-soon.svg",
    ],
  },
  {
    id: "solaris",
    title: "Solaris Monitoring",
    tagline: "Integral IoT system for real-time monitoring of photovoltaic cells",
    synopsis: "Hardware telemetry connected via MQTT to a FastAPI backend for real-time analysis of photovoltaic cells.",
    accent: "#fbbf24",
    font: "f2",
    img: "https://opengraph.githubassets.com/1/CherryStraw5337/Solaris-Monitoring",
    link: "https://github.com/CherryStraw5337/Solaris-Monitoring",
    linkLabel: "Explore the source code",
    mission: "Monitor in real-time the health and production of photovoltaic cells, connecting the hardware telemetry with the software analysis.",
    vision: "An integral end-to-end system where each cell reports its status and each piece of data ends in a useful decision.",
    challenges: "Reliable MQTT ingestion, the natural noise of physical sensors and carrying the signal from the microcontroller to a backend that can listen to it.",
    purpose: "Bring my training in electronic instrumentation to a complete IoT system: from the cable to the dashboard.",
    languages: ["Python"],
    disciplines: ["IoT", "Backend", "Telemetry", "Instrumentation"],
    tools: ["MQTT", "FastAPI", "Docker", "Sensors", "PostgreSQL", "Grafana", "GitHub Actions"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/Solaris-Monitoring",
      "img/coming-soon.svg",
    ],
  },
  {
    id: "slimespire",
    title: "SlimeSpire",
    tagline: "My first game: a strategic combat roguelike with lots of Balatro inspiration",
    synopsis: "A game that doesn't take itself too seriously, but is fun. A strategic combat roguelike in Lua, playable up to absurd levels (naneinf-esc). In active development.",
    accent: "#4ade80",
    font: "f1",
    img: "https://github.com/CherryStraw5337/SlimeSpire/blob/main/sprites/gif/hurtSlime.gif?raw=true",
    link: "https://github.com/CherryStraw5337/SlimeSpire",
    linkLabel: "Explore the source code",
    mission: "Build my first complete game: a strategic combat roguelike that can be scaled to absurd levels without breaking.",
    vision: "A game that is honest with itself: it doesn't take itself too seriously, but is genuinely fun. Developed in English and growing release after release.",
    challenges: "Relearning main loops, state management and resource optimization: my roots in microcontrollers, now with the flexibility of Lua.",
    purpose: "A side-project born from the simple pleasure of programming.",
    languages: ["Lua"],
    disciplines: ["Game Development", "State Management", "System Design"],
    tools: ["Lua", "Git", "GitHub"],
    gallery: [
      "https://opengraph.githubassets.com/1/CherryStraw5337/SlimeSpire",
      "https://github.com/CherryStraw5337/SlimeSpire/blob/main/sprites/logo.png?raw=true",
    ],
  },
  {
    id: "webpage",
    title: "Webpage",
    tagline: "My personal space on the web, handcrafted and without templates",
    synopsis: "My first frontend built from scratch to understand the complete web development cycle and have a own corner on the internet.",
    accent: "#f472b6",
    font: "f2",
    img: "https://opengraph.githubassets.com/1/lylaxtraw/Webpage",
    link: "https://github.com/lylaxtraw/Webpage",
    linkLabel: "Explore the source code",
    mission: "Have a own place to expose my ideas without depending on prefabricated templates.",
    vision: "Grow from “bare bones” to a professional portfolio, iteration after iteration and with the changelog at sight.",
    challenges: "Step out of my natural comfort zone (the backend, the data and the electrons) to master pure HTML/CSS and web deployment with GitHub Pages.",
    purpose: "Understand the complete web development cycle, from the first <div> to the deploy.",
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
    <a class="slide" href="html/project.html?p=${p.id}" aria-label="See project ${p.title}">
      <img src="${p.img}" alt="Imagen de ${p.title}" loading="lazy" />
      <span class="slide-title">${p.title}</span>
    </a>`
  ).join("");

  dotsEl.innerHTML = PROJECTS.map((_, i) => `<button aria-label="Go to project ${i + 1}"></button>`).join("");
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
