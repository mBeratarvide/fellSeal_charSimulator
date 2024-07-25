const coloresPoligonoRegular = {
  'relleno':colorFondoSeleccionado,
  'linea':'red'
};

function dibujarPoligonoRegular(contexto, centroX, centroY, lados, radio) {
  const angulo = (2 * Math.PI) / lados;
  contexto.beginPath();
  for (let i = 0; i < lados; i++) {
    const x = centroX + radio * Math.cos(i * angulo + rotacion);
    const y = centroY + radio * Math.sin(i * angulo + rotacion);
    if (i === 0) {
      contexto.moveTo(x, y);
    } else {
      contexto.lineTo(x, y);
    }
  }
  contexto.fillStyle = coloresPoligonoRegular['relleno'];
  contexto.strokeStyle = coloresPoligonoRegular['linea'];
  contexto.closePath();
  contexto.fill();
  contexto.stroke();
}

function dibujarTelaraña(contexto, centroX, centroY, lados, periodicidad) {
  const angulo = (2 * Math.PI) / lados;
  contexto.beginPath();
  for (let j = 0; j < 5; j++) {
    let period = periodicidad * j;
    for (let i = 0; i < lados; i++) {
      const x = centroX + period * Math.cos(i * angulo + rotacion);
      const y = centroY + period * Math.sin(i * angulo + rotacion);
      if (i === 0) {
        contexto.moveTo(x, y);
      } else {
        contexto.lineTo(x, y);
      }
    }
    contexto.closePath();
  }
  contexto.strokeStyle = 'blue';
  contexto.setLineDash([5, 10]);
  contexto.stroke();
}

function dibujarRayas(contexto, centroX, centroY, lados, radio) {
  const angulo = (2 * Math.PI) / lados;
  contexto.beginPath();
  for (let i = 0; i < lados; i++) {
    const x = centroX + radio * Math.cos(i * angulo + rotacion);
    const y = centroY + radio * Math.sin(i * angulo + rotacion);
    contexto.moveTo(centroX, centroY);
    contexto.lineTo(x, y);
  }
  contexto.strokeStyle = 'blue';
  contexto.closePath();
  contexto.setLineDash([5, 10]);
  contexto.stroke();
}

function dibujarTitulos(contexto, centroX, centroY, lados, radio, texto) {
  const angulo = (2 * Math.PI) / lados;
  contexto.font = "21px Arial";
  contexto.fillStyle = 'yellow';
  for (let i = 0; i < lados; i++) {
    const x = centroX + radio * Math.cos(i * angulo + rotacion);
    const y = centroY + radio * Math.sin(i * angulo + rotacion);
    contexto.fillText(texto[i], x-10, y);
  }
}

function dibujarPoligonoIrregular(contexto, centroX, centroY, lados, radio) {
  const angulo = (2 * Math.PI) / lados;
  let coordenadas = [];
  contexto.beginPath();
  for (let i = 0; i < lados; i++) {
    const x = centroX + radio[i] * Math.cos(i * angulo + rotacion);
    const y = centroY + radio[i] * Math.sin(i * angulo + rotacion);
    if (i === 0) {
      contexto.moveTo(x, y);
      coordenadas.push([x,y]);
    } else {
      contexto.lineTo(x, y);
      coordenadas.push([x,y]);
    }
  }
  contexto.fillStyle = 'red';
  contexto.strokeStyle = 'violet';
  contexto.closePath();
  contexto.fill();
  contexto.stroke();
  return coordenadas;
}

function dibujarCirculo(contexto, puntoX, puntoY) {
  contexto.beginPath();
  contexto.arc(puntoX, puntoY, 5, 0, 2*Math.PI);
  contexto.fillStyle = "yellow";
  contexto.fill();
  contexto.stroke;
}

function agregarAlGrupo() {
  team = [];
  for (let i = 0; i < tropas.length; i++) {
    if(tropas[i].checked) {
      team.push(reserva[i]);
    }
  }
}

function agregarLosQueTengan(propiedad) {
  if(!onTeam[propiedad]) {
    for (let i = 0; i < reserva.length; i++) {
      if(reserva[i].stats[propiedad] > 0) {
        team.push(reserva[i]);
        document.getElementById(reserva[i]['id']).checked = true;
      }
    }
    onTeam[propiedad] = true;
    cambiarEstadoBoton('filtro_'+propiedad, 'cliqueado');
  }
  calcular();
}

function calcularPropiamenteDicho() {
  hp = 0; sp = 0; atk = 0; def = 0; int = 0; res = 0; cri = 0; spd = 0; eva = 0;
  water = 0; fire = 0; earth = 0; thunder = 0; holy = 0; dark = 0;
  for (let i = 0; i < team.length; i++) {
    hp += team[i].stats.hp;
    sp += team[i].stats.sp;
    atk += team[i].stats.atk;
    def += team[i].stats.def;
    int += team[i].stats.int;
    res += team[i].stats.res;
    cri += team[i].stats.cri;
    spd += team[i].stats.spd;
    eva += team[i].stats.eva;
    water += team[i].stats.waterRes;
    fire += team[i].stats.fireRes;
    earth += team[i].stats.earthRes;
    thunder += team[i].stats.thunderRes;
    holy += team[i].stats.holyRes;
    dark += team[i].stats.darkRes;
  }
  ihp.innerText = hp;
  isp.innerText = sp;
  iatk.innerText = atk;
  idef.innerText = def;
  iint.innerText = int;
  ires.innerText = res;
  icri.innerText = cri;
  ispd.innerText = spd;
  ieva.innerText = eva;
  iwater.innerText = water;
  ifire.innerText = fire;
  iearth.innerText = earth;
  ithunder.innerText = thunder;
  iholy.innerText = holy;
  idark.innerText = dark;
}

function limpiarCanvas() {
  contexto.clearRect(0, 0, canvas.width, canvas.height);
}

function cambiarEstadoBoton(id, bEstado) {
  if(id.includes('Res')) {
    return null;
  }
  estado = 'btn btn-info btn-sm';
  if(bEstado == 'cliqueado') {
    estado = 'btn btn-warning btn-sm';
  }
  document.getElementById(id).setAttribute("class", estado);
}

function marcarTodas() {
  for (let i = 0; i < tropas.length; i++) {
    tropas[i].checked = true;
  }
  for (clave in onTeam) {
    onTeam[clave] = true;
    cambiarEstadoBoton('filtro_'+clave, 'cliqueado');
  }
  calcular();
}

function desmarcarTodas() {
  for (let i = 0; i < tropas.length; i++) {
    tropas[i].checked = false;
  }
  for (clave in onTeam) {
    onTeam[clave] = false;
    cambiarEstadoBoton('filtro_'+clave, 'desCliqueado');
  }
  calcular();
}

function soloSeleccionados() {
  for (clave in onTeam) {
    onTeam[clave] = false;
    cambiarEstadoBoton('filtro_'+clave, 'desCliqueado');
  }
  calcular();
}

function calcular() {
  limpiarCanvas();
  agregarAlGrupo();
  calcularPropiamenteDicho();
  dibujarPoligonoRegular(contexto, centro, centro, cantLados, radium);
  let coorsCirculo = dibujarPoligonoIrregular(contexto, centro, centro, cantLados, [hp*9,sp*9,int*9,res*9,cri*9,spd*9,eva*9,def*9,atk*9]);
  dibujarRayas(contexto, centro, centro, cantLados, radium);
  dibujarTelaraña(contexto, centro, centro, cantLados, ondasPeriodo);
  dibujarTitulos(contexto, centro, centro, cantLados, radium, ['HP','SP','INT','RES','CRI','SPD','EVA','DEF','ATK']);
  for (let i = 0; i < coorsCirculo.length; i++) {
    dibujarCirculo(contexto, coorsCirculo[i][0], coorsCirculo[i][1]);
  }
}
