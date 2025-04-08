
let index = 0;
function mostrarSiguienteTestimonio() {
  const testimonios = document.querySelectorAll('.testimonio');
  testimonios.forEach((t, i) => {
    t.style.transform = `translateX(-${index * 100}%)`;
  });
  index = (index + 1) % testimonios.length;
}
setInterval(mostrarSiguienteTestimonio, 5000);
