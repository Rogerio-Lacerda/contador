import Contador from './contador.js';

const contador = new Contador('24 December 2024 23:59:59 GMT-0300');

const contadorTexto = document.querySelector('.grid-contador');

contadorTexto.innerHTML = `
  <p class="contador">${contador.faltamDias.days}<span>Dias</span></p>
  <p class="contador">${contador.faltamDias.hours}<span>Hora(s)</span></p>
  <p class="contador">${contador.faltamDias.minutes}<span>Min.</span></p>
  <p class="contador">${contador.faltamDias.seconds}<span>Sec.</span></p>`;

setInterval(() => {
  contadorTexto.innerHTML = `
  <p class="contador">${contador.faltamDias.days}<span>Dias</span></p>
  <p class="contador">${contador.faltamDias.hours}<span>Hora(s)</span></p>
  <p class="contador">${contador.faltamDias.minutes}<span>Min.</span></p>
  <p class="contador">${contador.faltamDias.seconds}<span>Sec.</span></p>`;
}, 1000);
