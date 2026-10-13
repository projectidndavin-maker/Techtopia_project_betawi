const layers = document.querySelectorAll('.layer[data-d]');
const move = (x, y) => layers.forEach(l => {
  const d = +l.dataset.d;
  l.style.transform = `translate(${x * d}px,${y * d}px)`;
});
addEventListener('pointermove', e => move(e.clientX / innerWidth - .5, e.clientY / innerHeight - .5));
addEventListener('deviceorientation', e => {
  if (e.gamma != null) move(Math.max(-1, Math.min(1, e.gamma / 30)) / 2, 0);
});

const col = document.querySelector('.col');
[[12,34],[85,14],[48,52],[92,46],[6,58],[70,36],[30,13],[58,25]].forEach(([x, y], i) => {
  const s = document.createElement('i');
  s.className = 'sp';
  s.style.cssText = `left:${x}%;top:${y}%;animation-delay:${i * .6}s`;
  col.appendChild(s);
});

const hero = document.getElementById('hero');
document.getElementById('mulai').onclick = () => { hero.classList.add('open'); document.body.classList.add('in'); };
document.getElementById('kembali').onclick = () => { hero.classList.remove('open'); document.body.classList.remove('in'); scrollTo(0, 0); };
document.querySelectorAll('.tabs button').forEach(b => b.onclick = () => {
  document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b));
  document.querySelectorAll('.panel').forEach(p => p.classList.toggle('on', p.id === 'p-' + b.dataset.t));
});
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: .2 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

if (location.hash === '#jelajah') { hero.classList.add('open'); document.body.classList.add('in'); }
