/* ============================================================
   random.js — Rows 7-8, cols 8-10: Random.
   Free liberty zone: gamertags + a dice that rolls facts.
   ============================================================ */

const RANDOM = {
  title: "Random",
  note: "Caja fuerte sin llave",
  gamertags: [
    ["Discord", "Lylaxtraw5337", null],
    ["Minecraft (Java & Bedrock)", "ElStraw5337", null],
    ["Steam", "Steam Community", "https://steamcommunity.com/profiles/76561199070208628/"],
  ],
  facts: [
    "Vivo en la Tierra. Por cuestiones de privacidad, no puedo decir cuál es la buena.",
    "Mi animal favorito es el ajolote leucístico. Búscalo, es gratis y vale la pena.",
    "He practicado seis deportes: halterofilia, balonmano, taekwondo, fútbol, voleibol y natación.",
    "Esta página es la sucesora directa de mi antigua Webpage. Si encontrabas sus botones secretos… aquí también hay sorpresas.",
    "SlimeSpire toma (mucha) inspiración abierta de Balatro.",
    "Un PATCH bien puesto puede salvar ancho de banda, batería y civilizaciones enteras.",
    "Cuando no estoy programando: canto, bailo o ando en bici.",
    "“Dr Pepper, uhhhhh, no sé.” — R. Javi, filósofo contemporáneo.",
  ],
};

(function () {
  const body = $('[data-section="random"]');
  if (!body) return;
  const panel = body.closest(".panel");
  panel.querySelector("[data-section-title]").textContent = RANDOM.title;
  panel.querySelector("[data-section-note]").textContent = RANDOM.note;

  const gamertags = RANDOM.gamertags
    .map(([k, v, href]) =>
      href
        ? `<div class="fact"><dt>${k}</dt><dd><a href="${href}" target="_blank" rel="noopener" style="border-bottom:1px dotted var(--ink-faint)">${v}</a></dd></div>`
        : `<div class="fact"><dt>${k}</dt><dd>${v}</dd></div>`
    )
    .join("");

  body.innerHTML = `
    <div class="block"><p class="block-label">Users de juegos</p><dl class="facts">${gamertags}</dl></div>
    <div class="block">
      <p class="block-label">Dado de Lyla</p>
      <p class="random-fact" data-fact></p>
      <button class="dice-btn" data-dice>Tirar el dado</button>
    </div>`;

  const factEl = $("[data-fact]", body);
  const roll = () => {
    factEl.classList.add("fading");
    setTimeout(() => {
      factEl.textContent = RANDOM.facts[Math.floor(Math.random() * RANDOM.facts.length)];
      factEl.classList.remove("fading");
    }, 300);
  };
  $("[data-dice]", body).addEventListener("click", roll);
  roll();
})();
