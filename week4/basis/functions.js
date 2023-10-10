function getSum(x, y) {
  return x + y;
}
console.log(getSum(5, 2)); // 7

const getSumAlt = function (x, y) {
  return x + y;
};

// arrow function
const getSumArrow = (x, y) => {
  return x + y;
};
const getSumArrowAlt = (x, y) => x + y;
const sum = getSumArrow(5, 9);
console.log(sum); // 14
console.log(getSumArrowAlt(5, 9)); // 14

function doCallback(fn) {
  console.log("functie uitvoeren");
  fn();
}

doCallback(function () {
  console.log("ik wordt uitgevoerd");
});

doCallback(() => {
  console.log("ik wordt uitgevoerd");
});
