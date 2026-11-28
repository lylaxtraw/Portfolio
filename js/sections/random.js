/* ============================================================
   random.js — Rows 7-8, cols 8-10: Random.
   Free liberty zone: gamertags + a dice that rolls facts.
   ============================================================ */

const RANDOM = {
  title: "Random",
  note: "",
  gamertags: [
    ["Discord", "Lylaxtraw5337", null],
    ["Minecraft (Java & Bedrock)", "ElStraw5337", null],
    ["Steam", "Steam Community", "https://steamcommunity.com/profiles/76561199070208628/"],
  ],
  facts: [
    "I live in Planet Earth. Schocker, I know.",
    "My favorite animal is the leucistic axolotl. Look it up, it's free and worth it.",
    "I have practiced six sports: weightlifting, handball, taekwondo, soccer, volleyball and swimming.",
    "This page is the direct successor of my old Webpage. If you found its secret buttons… there are also surprises here.",
    "SlimeSpire takes (a lot of) open inspiration from Balatro.",
    "A well-placed PATCH can save bandwidth, battery and entire civilizations.",
    "When I'm not programming: I sing, dance or ride a bike.",
    "Did you know that the human anus is capable of stretching up to 10 cm in diameter? Don't try this at home.",
    "I have never smoked or drunk, I'm just better.",
    "I have registered over a year of continuous gameplay in Balatro, and over two years in Minecraft.",
  ],
};

const RANDOM_BLOCKS = [
  {
    type: "facts",
    label: "Game Users",
    facts: RANDOM.gamertags,
  },
  ...RANDOM.facts.map((fact) => ({ type: "text", label: "Lyla's Dice", body: fact })),
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
  dice.textContent = "Roll the dice!";
  dice.addEventListener("click", () => {
    carousel.show(1 + Math.floor(Math.random() * RANDOM.facts.length));
  });
  body.insertBefore(dice, $("[data-section-dots]", body));
});
