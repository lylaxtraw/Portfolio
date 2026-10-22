/* ============================================================
   wave.js — Shared background: black, slowly waving to the mouse.
   Auto-initializes on any page that has <canvas id="wave-bg">.
   ============================================================ */
(function () {
  const canvas = document.getElementById("wave-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const COLORS = ["#22d3ee", "#fb7185", "#a78bfa"]; // palette accents, very dim
  const mouse = { x: innerWidth / 2, y: innerHeight / 3 };

  const blobs = COLORS.map((color, i) => ({
    color,
    x: mouse.x,
    y: mouse.y,
    r: Math.max(innerWidth, innerHeight) * (0.34 + i * 0.1),
    // Each blob trails the mouse with its own lag + orbits slowly → "wave"
    lag: 0.012 + i * 0.008,
    orbitR: 90 + i * 130,
    speed: 0.00012 + i * 0.00007,
    phase: (i * Math.PI * 2) / 3,
  }));

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener("resize", resize);
  addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  function draw(t) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.globalCompositeOperation = "lighter";
    for (const b of blobs) {
      // Slow autonomous drift around the mouse + heavy easing towards it
      const ox = Math.cos(t * b.speed + b.phase) * b.orbitR;
      const oy = Math.sin(t * b.speed * 1.4 + b.phase) * b.orbitR * 0.7;
      b.x += (mouse.x + ox - b.x) * b.lag;
      b.y += (mouse.y + oy - b.y) * b.lag;

      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, b.color + "14"); // ~8% alpha
      g.addColorStop(1, b.color + "00");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  if (reduceMotion) draw(0); // static, calm frame
  else requestAnimationFrame(draw);
})();
