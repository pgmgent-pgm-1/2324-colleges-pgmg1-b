const day = "Tuesday"; // string
const days = ["Monday", "Tuesday"]; // array
const pi = 3.14; // number
const isTuesday = true; // boolean

/*
const gameName = "Call of Duty Modern Warfare II";
const gamePlatforms = ["PS5", "PS4", "PC", "Xbox One"];
const gameYear = 2022;
const gamePublisher = "Activision";
*/

// object
const game = {
  name: "Call of Duty Modern Warfare II",
  platforms: ["PS5", "PS4", "PC", "Xbox One"],
  year: 2023,
  publisher: {
    name: "Activision",
    country: "USA",
  },
};
console.log(game);
console.log(game.name);
console.log(game.year);
game.year = 2022;
console.log(game);
// CoD Modern Warfare is een spel uitgekomen in 2022 en uitgegeven door Activision
console.log(
  `${game.name} is een spel uitgekomen in ${game.year} uitgegeven door ${game.publisher.name}`
);

// array met objecten
const smartphones = [
  {
    name: "iPhone 15",
    brand: "Apple",
  },
  {
    name: "OnePlus 8",
    brand: "OnePlus",
  },
];

for (const phone of smartphones) {
  console.log(`${phone.name} is een merk van ${phone.brand}`);
}
