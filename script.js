function mudarSeletor(eventClick) {
  const corSelecionado = document.querySelector('.selected');
  corSelecionado.classList.remove('selected');
  eventClick.target.classList.add('selected');
}
const paletaColors = document.getElementById('color-palette');
paletaColors.addEventListener('click', mudarSeletor);
