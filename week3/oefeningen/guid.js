// guid
const characters =
  "abcdefghijklmnopqrstuvwxyzABDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function generateGUID(number) {
  let password = "";
  for (let i = 0; i < number; i++) {
    // random getal tussen 0 en lengte van characters - 1
    // deze gebruiken we als index op characters
    // bv. random getal is 3 -> c
    password += characters[Math.floor(Math.round() * characters.length)];
  }
  return password;
}

console.log(generateGUID(10));
