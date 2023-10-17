console.log(window.innerWidth);

document.body.style.color = "red";

const $title = document.querySelector("h1");
$title.style.color = "green";
$title.innerText = "Aangepast via JavaScript";

const lectors = ["Michael Vanderpoorten", "Evelien Rutsaert", "Wachem Huyge", "Adriaan Glibert"];

let html = "";
for (const lector of lectors) {
  html += `
    <li>${lector}</li>
  `;
}

// const $list = document.querySelector("#list");
const $list = document.getElementById("list");
$list.innerHTML = html;
