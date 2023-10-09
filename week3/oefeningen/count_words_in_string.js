function calculateAmountOfWords(text) {
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, "");
  const words = text.split(" ");
  return words.length;
}

const result = calculateAmountOfWords("Hallo! dit is een tekst in de les!");
console.log(result);
