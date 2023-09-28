function saySomething(message) {
  console.log(`Het bericht is ${message}`);
}

saySomething(); // Het bericht is undefined
saySomething("Messi is beter dan Ronaldo");
saySomething();

function multiplyNumber(number = 10, multiplier = 2) {
  console.log(number * multiplier);
}

multiplyNumber(10, 5); // 50
multiplyNumber(7); // 14
multiplyNumber(); // 20

function getSum(x, y) {
  if (x < 10) {
    return x * y;
  }
  console.log("gelukt");
  return x + y;
}

function pow(x, y) {
  // ** = tot de macht
  return x ** y;
}

const sum = getSum(10, 5);
console.log(sum);

console.log(pow(2, 3));

function getTemplate(message) {
  return `
    =====================
    ${message}
    =====================
  `;
}

console.log(getTemplate("Boodschap"));
