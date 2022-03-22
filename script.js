function mudarSeletor(eventClick) {
  const corSelecionado = document.querySelector('.selected');
  corSelecionado.classList.remove('selected');
  eventClick.target.classList.add('selected');
}
const paletaColors = document.getElementById('color-palette');
paletaColors.addEventListener('click', mudarSeletor);

let black = document.querySelector('.black');
let greenyellow = document.querySelector('.greenyellow');
let aqua = document.querySelector('.aqua');
let darkviolet = document.querySelector('.darkviolet');

function mudaCor() {
  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('pixel') &&
      black.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = 'black';
    } else if (
      event.target.classList.contains('pixel') &&
      greenyellow.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = 'greenyellow';
    } else if (
      event.target.classList.contains('pixel') &&
      aqua.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = 'aqua';
    } else if (
      event.target.classList.contains('pixel') &&
      darkviolet.classList.contains('selected')
    ) {
      event.target.style.backgroundColor = 'darkviolet';
    }
  })
}
mudaCor();
