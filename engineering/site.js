const filterGroup = document.querySelector('.filters');
const filters = [...filterGroup.querySelectorAll('button')];
const projects = [...document.querySelectorAll('.project')];
const filterStatus = document.querySelector('#filter-status');
filterGroup.hidden = false;
for (const button of filters) {
  button.addEventListener('click', () => {
    for (const filter of filters) {
      filter.setAttribute('aria-pressed', String(filter === button));
    }
    const category = button.dataset.filter;
    for (const project of projects) {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    }
    const count = projects.filter(project => !project.hidden).length;
    filterStatus.textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}.`;
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
if (context) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function draw(x = 0, y = 0) {
    const size = canvas.width;
    context.clearRect(0, 0, size, size);
    for (let ring = 0; ring < 30; ring++) {
      context.beginPath();
      for (let step = 0; step <= 160; step++) {
        const angle = step / 160 * 2 * Math.PI;
        const radius = 18 + ring * 8.15;
        const ripple = Math.sin(angle * 3 + ring * .115) * .17 +
          Math.cos(angle * 5 - ring * .09) * .09;
        const distance = radius * (1 + ripple);
        const [px, py] = [
          size / 2 + Math.cos(angle) * distance + x * ring * .55,
          size / 2 + Math.sin(angle) * distance + y * ring * .55
        ];
        if (step === 0) context.moveTo(px, py);
        else context.lineTo(px, py);
      }
      context.closePath();
      context.strokeStyle = ring % 5 === 0 ? '#d8f58f' : '#9bc47991';
      context.lineWidth = ring % 5 === 0 ? 1.4 : .8;
      context.stroke();
    }
  }
  draw();
  let frame = 0;
  canvas.addEventListener('pointermove', event => {
    if (reducedMotion.matches || event.pointerType !== 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => draw(
      (event.clientX - rect.left) / rect.width - .5,
      (event.clientY - rect.top) / rect.height - .5
    ));
  });
  canvas.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    draw();
  });
}
