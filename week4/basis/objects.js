const system = {
  name: "Playstation 5",
  manufacturer: "Sony",
  handheld: false,
};

system.name = "PlayStation 6";
let prop = "name";
console.log(system.name);
console.log(system["name"]);
console.log(system[prop]);

for (const prop in system) {
  console.log(`${prop} is ${system[prop]}`);
}

// delete
delete system.handheld;
console.log(system);

// object met functie
const systemTwo = {
  name: "Playstation 5",
  manufacturer: "Sony",
  handheld: false,
  logName: function () {
    console.log(this.name);
  },
};
systemTwo.logName();
