const $container = document.getElementById("multiplication__container");

const number = parseInt(window.prompt("Definieer de maaltafel, bv. 15"));
const amount = parseInt(window.prompt("Definieer het aantal calculaties"));

let html = "";
for (let i = 0; i <= amount; i++) {
  html += `<li>${i} * ${number} = ${i * number}</li>`;
}

$container.innerHTML = html;
