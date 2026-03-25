// Cambia la fecha/hora del evento (año-mes-díaThh:mm:ss)
const target = new Date("2026-04-10T17:00:00");

const el = {
  d: document.getElementById("d"),
  h: document.getElementById("h"),
  m: document.getElementById("m"),
  s: document.getElementById("s"),
};

function tick(){
  const now = new Date();
  let diff = target - now;

  if (diff < 0) diff = 0;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  el.d.textContent = d;
  el.h.textContent = String(h).padStart(2,"0");
  el.m.textContent = String(m).padStart(2,"0");
  el.s.textContent = String(s).padStart(2,"0");
}

tick();
setInterval(tick, 1000);