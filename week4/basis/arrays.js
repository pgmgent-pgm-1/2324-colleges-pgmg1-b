// arrays
let animals = ["kat", "hond", "leeuw"];
animals[3] = "zeehond";
// toevoegen op het einde van een array
let count = animals.push("olifant");
console.log(animals);
console.log(count);

// indexOf
// belangrijk: niet voor objecten
console.log(animals.indexOf("hond")); // 1
console.log(animals.indexOf("leeuw")); // 2
console.log(animals.indexOf("nijlpaard")); // -1

if (animals.indexOf("nijlpaard") >= 0) {
  console.log("Nijlpaard bestaat in array");
} else {
  console.log("Nijlpaard bestaat niet in array");
}

// unshift
console.log(animals.length);
count = animals.unshift("pinguïn");
console.log(animals);
console.log(count);

// splice
// optie 1: elementen verwijderen vanaf een bepaalde index
let deleted = animals.splice(1, 2);
console.log(animals);
console.log(deleted);
// optie 2: elementen toevoegen op een bepaalde index
deleted = animals.splice(2, 0, "walvis");
console.log(animals);
console.log(deleted);

// concat
const insects = ["mier", "spin", "mug"];
const allAnimals = animals.concat(insects);
console.log(allAnimals);
console.log(animals);

// pop (laatste item verwijderen)
deleted = animals.pop();
console.log(deleted);
console.log(animals);

// shift (eerste item verwijderen)
deleted = animals.shift();
console.log(deleted);
console.log(animals);

// join
console.log(`Dit zijn dieren: ${animals.join(", ")}`);

// reverse
const reversed = animals.reverse();
console.log(reversed);
console.log(animals);

// slice (van index x tot index y), niet tot en met
const slice = animals.slice(1, 2);
console.log(slice);

// sort
animals.sort();
console.log(animals);

const numbers = [49, 29, 19];
numbers.sort();
console.log(numbers);

animals.sort(function (a, b) {
  return b.localeCompare(a);
});
console.log(animals);

animals = [
  {
    name: "Panda",
    coolness: 10,
  },
  {
    name: "Dog",
    coolness: 7,
  },
  {
    name: "Tiger",
    coolness: 9,
  },
];

animals.sort(function (a, b) {
  if (a.coolness < b.coolness) {
    return 1;
  } else if (a.coolness > b.coolness) {
    return -1;
  } else {
    return 0;
  }
});

// kortere versie
animals.sort(function (a, b) {
  return b.coolness - a.coolness;
});

console.log(animals);
