// for: wanneer je iets een bepaald aantal keer wil uitvoeren
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for of: heel gemakkelijk een array overlopen / loopen
const characters = ["a", "b", "c"];
for (const character of characters) {
  console.log("uitgevoerd");
  console.log(character);
}

// forEach: array te overlopen (old-school)
characters.forEach(function (character) {
  console.log("uitgevoerd");
  console.log(character);
});

// do ... while: wordt altijd minstens één keer uitgevoerd
let x = 0;
do {
  x = x + 5; // 10
  console.log(x);
} while (x < 0);

let y = 0;
do {
  y += 5;
  console.log(y);
} while (y < 10);

// while: wordt 0 of meerdere keren uitgevoerd
let z = 10;
while (z < 20) {
  z += 5;
  console.log(`Het getal is ${z}`);
}

let a = 20;
while (a < 20) {
  a += 5;
  console.log(`Het getal is nu ${z}`);
}
