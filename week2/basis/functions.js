function sayHello() {
  console.log("Hello");
}

// functie uitvoeren
sayHello();
console.log("Abc");
sayHello();

function sayHelloTo(name) {
  console.log(`Hallo ${name}`);
}

sayHelloTo(); // hallo undefined
sayHelloTo("Klaas");
sayHelloTo(); // hallo undefined

function sayAge(name, age) {
  console.log(`${name} is ${age} jaar oud`);
}

sayAge("Klaas", 19); // Klaas is 19 jaar oud
