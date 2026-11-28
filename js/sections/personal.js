/* ============================================================
   personal.js — Rows 5-6, cols 1-3: Info Personal.
   Likes and whatnot (from the old Webpage, more dynamic & fun).
   ============================================================ */

const PERSONAL = {
  title: "Personal Information",
  note: "",
  blocks: [
    { type: "facts", label: "Quick Info",
      facts: [
        ["Age", "20 years"],
        ["Gender", "Trans woman"],
        ["Pronouns", "Any"],
        ["Profession", "Streamer"],
        ["Favorite Animal", "Leucistic Axolotl"],
        ["Dream Pet", "Cat"],
        ["Sentimental Situation", "In a relationship"],
        ["Civil Status", "Single"],
      ] },
    { type: "text", label: "MMusic",
      body: "Everything except corridos tumbados." },
    { type: "chips", label: "Favorite Video Games",
      items: ["Sonic", "Minecraft", "Roblox", "Stardew Valley", "Balatro", "UT/DR", "Dead As Disco", "Kirby", "Pkmn"] },
    { type: "chips", label: "Favorite Characters",
      items: ["Sonic", "Shadow", "Silver", "Ralsei", "Susie", "Balatro Balatrez", "Charlie (DaD)", "Kirby", "Luigi", "Deku (BNHA)", "Tanjiro (KNY)"] },
    { type: "chips", label: "Board Games I Play",
      items: ["Póker", "21", "Catan", "Monopoly", "Rummy", "Chinazo", "Pesca", "PTCG", "Billar"] },
    { type: "chips", label: "Deportes que he practicado",
      items: ["Halterofilia", "Balonmano", "Taekwondo", "Fútbol", "Voleibol", "Natación"] },
    { type: "chips", label: "Hobbies",
      items: ["Canto", "Baile", "Paseos", "Andar en bici", "Fotografía", "Programación", "Videojuegos", "Intentar armar circuitos"] },
    { type: "text", label: "Comida",
      body: "Todo menos guayaba, cosas picantes, comidas cargadas y comida marina." },
  ],
};

mountSection("personal", PERSONAL, PERSONAL.blocks);
