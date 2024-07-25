const canvas = document.getElementById('miCanvas');
const contexto = canvas.getContext('2d');
const rotacion = 4.363;
const tropas = document.getElementsByClassName("trabajo");
const centro = canvas.width / 2;
const radium = canvas.width / 2;
const cantLados = 9;
const ondasPeriodo = radium / 5;
const incremento = ondasPeriodo / 10;
const listaClases = document.getElementById('clases_checkbox');

function generarListadoClases() {
  listaClases.innerHTML = '';
  for (let i = 0; i < reserva.length; i++) {
    let nombre = reserva[i].getClase();
    let item = document.createElement("li");
    let texto = document.createElement("label");
    let check = document.createElement("input");
    check.type = "checkbox";
    check.id = reserva[i]['id'];
    check.setAttribute("class", 'trabajo');
    texto.setAttribute('for', reserva[i]['id']);
    texto.innerHTML = nombre;
    listaClases.appendChild(item);
    item.appendChild(check);
    item.appendChild(texto);
  }
}

let team = [];
let onTeam = {
  'hp':false,
  'sp':false,
  'atk':false,
  'def':false,
  'int':false,
  'res':false,
  'cri':false,
  'spd':false,
  'eva':false,
  'waterRes':false,
  'fireRes':false,
  'earthRes':false,
  'thunderRes':false,
  'holyRes':false,
  'darkRes':false
};

let ihp = document.getElementById('HP');
let isp = document.getElementById('SP');
let iatk = document.getElementById('ATK');
let idef = document.getElementById('DEF');
let iint = document.getElementById('INT');
let ires = document.getElementById('RES');
let icri = document.getElementById('CRI');
let ispd = document.getElementById('SPD');
let ieva = document.getElementById('EVA');
let iwater = document.getElementById('waterRes');
let ifire = document.getElementById('fireRes');
let iearth = document.getElementById('earthRes');
let ithunder = document.getElementById('thunderRes');
let iholy = document.getElementById('holyRes');
let idark = document.getElementById('darkRes');
let hp = 0, sp = 0, atk = 0, def = 0, int = 0, res = 0, cri = 0, spd = 0, eva = 0;
let water = 0, fire = 0, earth = 0, thunder = 0, holy = 0, dark = 0;

generarListadoClases();
calcular();
