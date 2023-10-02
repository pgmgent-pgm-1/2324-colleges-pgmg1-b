// variabelen
let name = "Michael"; // string
const day = 2; // number
const isMonday = true; // boolean
const animals = ["panda", "tiger"]; // array
let x; // undefined

name = "Een andere naam";

// string concatenation
const currentDay = "maandag";
const currentClass = "1PGMb";

console.log(currentClass + " heeft les op " + currentDay);
console.log(`${currentClass} heeft les op: ${currentDay}`);

let sentence = `${currentClass} heeft les op: ${currentDay}`;

sentence += ", dinsdag en donderdag";
console.log(sentence);

let y = 10;
y += 20;
console.log(y); // 30

// conditions
if (y > 30) {
  console.log("Y is groter dan 30");
} else if (y < 30) {
  console.log("Y is kleiner dan 30");
} else {
  console.log("Y is gelijk aan 30");
}

console.log(y > 30 ? "Getal is groter dan 30" : "Getal is niet groter dan 30");

// switch
const color = "blue";
switch (color) {
  case "green":
    console.log("Kleur is groen");
    break;
  case "yellow":
    console.log("Kleur is geel");
    break;
  default:
    console.log("Kleur is iets anders");
    break;
}

// arrays
const cars = ["BMW", "Tesla", "Mercedes", "Opel"];
console.log(cars[0]); // BMW
console.log(cars.length); // 4
console.log(cars[cars.length - 1]); // item 3, Opel

for (let i = 0; i < cars.length; i++) {
  console.log(i);
}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// functions
function sayHello() {
  console.log("Hallo");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo("Dave");

function calculateSum(x, y) {
  return x + y;
}

const sum = calculateSum(10, 30); // 40
console.log(sum);
