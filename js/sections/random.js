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

const RANDOM_BLOCKS = [
  {
    type: "facts",
    label: "Users de juegos",
    facts: RANDOM.gamertags,
  },
  ...RANDOM.facts.map((fact) => ({ type: "text", label: "Dado de Lyla", body: fact })),
];

mountSection("random", RANDOM, RANDOM_BLOCKS, {
  showIndicators: false,
  autoRotate: false,
}).then((carousel) => {
  const body = $('[data-section="random"]');
  if (!carousel || !body) return;
  const dice = document.createElement("button");
  dice.type = "button";
  dice.className = "dice-btn";
  dice.textContent = "Tirar el dado";
  dice.addEventListener("click", () => {
    carousel.show(1 + Math.floor(Math.random() * RANDOM.facts.length));
  });
  body.insertBefore(dice, $("[data-section-dots]", body));
});
