/* ============================================================
   personal.js — Rows 5-6, cols 1-3: Info Personal.
   Likes and whatnot (from the old Webpage, more dynamic & fun).
   ============================================================ */

const PERSONAL = {
  title: "Info Personal",
  note: "Lo que me mueve cuando nadie está viendo",
  blocks: [
    { type: "facts", label: "Ficha rápida",
      facts: [
        ["Edad", "19 años"],
        ["Género", "Mujer trans"],
        ["Pronombres", "Cualesquiera"],
        ["Profesión", "Estudiante"],
        ["Animal favorito", "Ajolote leucístico"],
        ["Mascota soñada", "Gato"],
      ] },
    { type: "text", label: "Música",
      body: "Todo menos corridos tumbados." },
    { type: "chips", label: "Videojuegos favoritos",
      items: ["Sonic", "Minecraft", "Roblox", "Stardew Valley", "Balatro", "UD/DR", "Dead As Disco", "Kirby", "Pkmn"] },
    { type: "chips", label: "Personajes favoritos",
      items: ["Sonic", "Shadow", "Silver", "Ralsei", "Susie", "Balatro Balatrez", "Charlie (DaD)", "Kirby", "Luigi", "Deku (BNHA)", "Tanjiro (KNY)"] },
    { type: "chips", label: "Juegos de mesa",
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
