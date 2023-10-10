const consoles = [
  {
    name: "Playstation 5",
    manufacturer: "Sony",
    handheld: false,
  },
  {
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    handheld: false,
  },
  {
    name: "Switch",
    manufacturer: "Nintendo",
    handheld: true,
  },
  {
    name: "Steam Deck",
    manufacturer: "Steam",
    handheld: true,
  },
];
console.log(consoles);
// 1. Map
// past originele array niet aan
// heeft dezelfde length als originele array
const mapped = consoles.map(function (console) {
  return console.name;
});
console.log(mapped);
console.log(mapped.length === consoles.length); // true

// met arrow function
const mappedArrow = consoles.map((console) => console.name);

// 2. Filter
// past originele array niet aan
// return altijd true of false
// resultaat is een array met 0 of meerdere items
const handheldConsoles = consoles.filter((console) => {
  return console.handheld;
});
console.log(handheldConsoles);

// 3. Find
// return altijd true of false
// geeft undefined of het 1 item uit array terug
const hardware = consoles.find((console) => {
  return console.manufacturer === "Microsoft";
});
console.log(hardware);
