let day = "Donderdag"; // string
console.log(day);
day = "Vrijdag";
console.log(day);

const pi = 3.14;
const isWednesday = false; // boolean true of false

const items = [49, 30, 28, 49, 28, 3];
console.log(items[0]);
console.log(items.length);
console.log(items[items.length - 1]);
items[0] = 100; // pas het getal op index 0 aan
console.log(items);
items.push(46); // voeg 46 toe achteraan
console.log(items);
console.log("------------");

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log("------------");
let sum = 0;
let text = "";
for (const item of items) {
  sum += item;
  text += item;
}
console.log(sum);
console.log(text);

console.log("------------");
for (const item of items) {
  if (item > 30) {
    console.log(`${item} is groter dan 30`);
  } else {
    console.log(`${item} is kleiner dan of gelijk aan 30`);
  }
}
console.log("------------");
function saySomething() {
  console.log("Something");
}

console.log("Voor de functie");
saySomething();
console.log("Na de functie");

function sayHelloTo(name = "niemand") {
  console.log(`Hallo aan ${name}`);
}

sayHelloTo("Klaas");
sayHelloTo("Tyson");
sayHelloTo();
const result = sayHelloTo();
console.log(result);

function getTemplate(name) {
  return `
  ====================
  Hallo ${name}
  ====================
  `;
}

const result2 = getTemplate("Lais");
console.log(result2);
