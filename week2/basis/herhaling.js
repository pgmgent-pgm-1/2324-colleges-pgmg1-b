const year = 2023; // number
const pi = 3.14; // number
const isMonday = true; // boolean
const car = "Mercedes"; // string

console.log(car === "Mercedes");
console.log(car === "mercedes");
console.log(year === 2023);
console.log(year === "2023");
console.log(year + "" === "2023"); // "2023" === "2023"

console.log(year !== 2023);

console.log(year === 2023 && car === "Mercedes"); // true
console.log(year === 2022 || car === "Mercedes"); // true
console.log(year === 2022 && car === "Mercedes"); // false

console.log(true || false || false); // true
console.log(true && false && true); // false
console.log("Hallo" && true); // true
console.log(true && undefined); // false

if (year > 2020) {
  console.log("Het jaar is na 2020");
} else if (year === 2020) {
  console.log("Het jaar is 2020");
} else {
  console.log("Het jaar is voor 2020");
}
