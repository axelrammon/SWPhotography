// BOAS VINDAS
let data = new Date();
let hora = data.getHours();

let boasvindas = document.querySelector('#h1_boasvindas');

if (hora >= 1 && hora < 5) {
  boasvindas.innerHTML = "Boa Madruga!";
} else if (hora >= 5 && hora < 13) {
  boasvindas.innerHTML = "Bom Dia!";
} else if (hora >= 13 && hora < 19) {
  boasvindas.innerHTML = "Boa Tarde!";
} else {
  boasvindas.innerHTML = "Boa Noite!";
}

