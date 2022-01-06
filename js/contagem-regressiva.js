const segundos = 1000;
const minutos = segundos * 60;
const horas = minutos * 60;
const dias = horas * 24;

let contagem = new Date('03/03/2025 00:00:00').getTime();
let x = setInterval(() => contagemRegressiva(), segundos);

function contagemRegressiva() {
  let agora = new Date(Date.now()).getTime();
  let diff = contagem - agora;

  document.getElementById('dias').innerText = Math.floor(diff / dias);
  document.getElementById('horas').innerText = Math.floor(diff % dias / horas);
  document.getElementById('minutos').innerText = Math.floor(diff % horas / minutos);
  document.getElementById('segundos').innerText = Math.floor(diff % minutos / segundos);
}