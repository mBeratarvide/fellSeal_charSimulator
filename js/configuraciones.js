if(localStorage.getItem('idioma') === null) {
  localStorage.setItem('idioma', 'es');
}

function cambioIdioma(id) {
  let radioIdioma = document.getElementById(id);
  radioIdioma.checked = true;
  localStorage.setItem('idioma', id);
  generarListadoClases();
  setIdiomaBotones();
  desmarcarTodas();
}

const botonTodos = {
  'es':'Todos',
  'en':'All'
}

const botonNinguno = {
  'es':'Ninguno',
  'en':'None'
}

const botonAlgunos = {
  'es':'Solo seleccionados',
  'en':'Only selected'
}

const comboBox = document.getElementById('colorFondo');
let colorFondoSeleccionado = comboBox.value;
comboBox.addEventListener('change', function() {
  colorFondoSeleccionado = comboBox.value;
  window.location.reload();
});

function setIdiomaBotones() {
  document.getElementById('btnTodos').innerHTML = botonTodos[localStorage.getItem('idioma')];
  document.getElementById('btnNinguno').innerHTML = botonNinguno[localStorage.getItem('idioma')];
  document.getElementById('btnAlgunos').innerHTML = botonAlgunos[localStorage.getItem('idioma')];
}

document.getElementById(localStorage.getItem('idioma')).checked = true;
setIdiomaBotones();
