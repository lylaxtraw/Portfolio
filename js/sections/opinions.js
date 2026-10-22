/* ============================================================
   opinions.js — Rows 5-6, cols 8-10: Opiniones.
   Feed of quotes from friends/classmates (old Webpage) and,
   eventually, employers & work buddies. Each opinion keeps its
   author's picture + a link to their social media.
   ============================================================ */

const OPINIONS_META = {
  title: "Opiniones",
  note: "Lo que dicen quienes me conocen",
};

// Profile pictures live in the old Webpage repo
const PFP_BASE = "https://raw.githubusercontent.com/lylaxtraw/Webpage/main/src/Opiniones/pfps/";

const OPINIONS = [
  { text: "Perseverante, resiliente, positiva, leal, genuina",        who: "C. Canvas",    href: "https://www.instagram.com/fxck_matus/",               img: PFP_BASE + "close.jpeg" },
  { text: "Empática, resiliente, amable, divertida, honesta",         who: "V. Maleny",    href: "https://www.instagram.com/tweeks_coffee_/",           img: PFP_BASE + "maleny.jpeg" },
  { text: "Amable, optimista, empática, amistosa, alegre",            who: "N. César",     href: "https://www.instagram.com/cessssarl_/",               img: PFP_BASE + "cesar.jpeg" },
  { text: "Fiel, amigable, trabajadora, romántica, creativa",         who: "M. Arturo",    href: "https://www.instagram.com/montero.luisarturo/",       img: PFP_BASE + "arturo.jpeg" },
  { text: "Excelente, extraña y divertida persona",                   who: "T. Jordan",    href: "https://www.instagram.com/toyordan_/",                img: PFP_BASE + "toyopfp.jpeg" },
  { text: "Espontánea, generosa, detallista, servicial, auténtica",   who: "Y. Carett",    href: "https://www.instagram.com/moonxjstars/",              img: PFP_BASE + "moon.jpeg" },
  { text: "Inteligente, amistosa, cringe, justa, empática",           who: "S. Raxenn",    href: "https://www.instagram.com/ssantiagojoyar/",           img: PFP_BASE + "raxenn.jpeg" },
  { text: "Callada, tierna, tímida, chistosa, alta",                  who: "Q. Camila",    href: "https://www.instagram.com/cami_qr06/",                img: PFP_BASE + "camila.jpeg" },
  { text: "Inteligente, amable, callada, interesante, cariñosa",      who: "G. Lizbeth",   href: "https://www.instagram.com/liz.gmz5/",                 img: PFP_BASE + "lizbeth.jpeg" },
  { text: "Graciosa, diferente, inteligente, amistosa, adaptable",    who: "G. Alison",    href: "https://www.instagram.com/aliisonn.gv/",              img: PFP_BASE + "alison.jpeg" },
  { text: "Graciosa, atenta, divertida, amable, extrovertida",        who: "B. Eli",       href: "https://www.instagram.com/becks.x__/",                img: PFP_BASE + "eli.jpeg" },
  { text: "Tranquila, agradable, analítica y divertida",              who: "D. Anna",      href: "https://www.instagram.com/dannanajeramorales/",       img: PFP_BASE + "dannapfp.jpeg" },
  { text: "Divertida, sociable, culta, lista, única",                 who: "A. Tejada",    href: "https://www.instagram.com/ali_tejeda/",               img: PFP_BASE + "alipfp.jpeg" },
  { text: "Graciosa, inteligente, amistosa, comprensiva, increíble",  who: "M. Ana",       href: "https://www.instagram.com/contrerasmariana_013/",     img: PFP_BASE + "marpfp.jpeg" },
  { text: "Inteligente, geek, amiguero, optimista, freaky",           who: "P. Sergio",    href: "https://www.instagram.com/sercchio_am/",              img: PFP_BASE + "sergio.jpeg" },
  { text: "Consejera, optimista, amable, empática, amigable",         who: "N. Sara",      href: "https://www.instagram.com/sisoysaraan/",              img: PFP_BASE + "sara.jpeg" },
  { text: "Persona con ganas de aprender",                            who: "L. Montano",   href: "https://www.instagram.com/lmontano10/",               img: PFP_BASE + "montanopfp.jpeg" },
  { text: "Payasa, táctica, centrada, migajera, lyla",                who: "A. Valentine", href: "https://www.instagram.com/lamunuwa/",                 img: PFP_BASE + "munuwa.jpeg" },
  { text: "Virgo, inteligente, despistada, astuta, divertida",        who: "H. Molina",    href: "https://www.instagram.com/hafo.xd/",                  img: PFP_BASE + "hafidpfp.jpeg" },
  { text: "Está muy loca la chica",                                   who: "A. Nicole",    href: "https://www.instagram.com/nicoco_bruh/",              img: PFP_BASE + "nicolepfp.jpeg" },
  { text: "Salva portera vendedora de chucherías",                    who: "G. Guillermo", href: "https://www.instagram.com/memo_abad.25/",             img: PFP_BASE + "guillermopfp.jpeg" },
  { text: "Rizos, sonikera, cariñosa, emocional, ojerosa",            who: "Y. Ximena",    href: "https://www.instagram.com/fresitayame/",              img: PFP_BASE + "yafi.jpeg" },
];

(function () {
  const list = $('[data-section="opinions"]');
  if (!list) return;
  const panel = list.closest(".panel");
  panel.querySelector("[data-section-title]").textContent = OPINIONS_META.title;
  panel.querySelector("[data-section-note]").textContent = OPINIONS_META.note;

  list.innerHTML = OPINIONS.map((o) => `
    <figure class="opinion">
      <img class="opinion-avatar" src="${o.img}" alt="Foto de ${o.who}" loading="lazy" />
      <figcaption>
        <blockquote class="opinion-text">“${o.text}”</blockquote>
        <a class="opinion-who" href="${o.href}" target="_blank" rel="noopener">— ${o.who}</a>
      </figcaption>
    </figure>`).join("");
})();
