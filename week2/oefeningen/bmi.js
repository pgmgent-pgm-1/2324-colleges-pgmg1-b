const weight = 70;
const length = 1.79;

const bmi = weight / (length * length);
// optie 2
// const bmi = weight / Math.pow(length);
// optie 3 (** betekent tot de macht)
// const bmi = weight / (length ** 2);

let message = "";
if (bmi < 18.5) {
  message = "ondergewicht";
} else if (bmi < 25) {
  message = "het aanbevolgen gewicht";
} else if (bmi <= 30) {
  message = "overgewicht";
} else {
  message = "zwaarlijvig";
}

console.log(`Jouw bmi is ${bmi}. Je hebt ${message}`);
