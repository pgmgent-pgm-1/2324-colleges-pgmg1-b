const arrayOne = [4, 6, 7];
const arrayTwo = [8, 1, 9];

const arrayNew = [];
for (let i = 0; i < arrayOne.length; i++) {
  arrayNew[i] = arrayOne[i] + arrayTwo[i];
}

console.log(arrayNew);
