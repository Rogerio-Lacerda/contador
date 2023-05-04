import Contador from "./contador.js";

const contador = new Contador("24 December 2023 23:59:59 GMT-0300");

const contadorTexto = document.querySelector(".contador");

setInterval(() => {
  contadorTexto.innerText = `${contador.faltamDias.days} dias e ${contador.faltamDias.hours}:${contador.faltamDias.minutes}:${contador.faltamDias.seconds}hs`;
}, 1000);
