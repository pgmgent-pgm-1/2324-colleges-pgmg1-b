// for (let i = 0; i < 10; i = i + 1) {
// for (let i = 0; i < 10; i += 1) {
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let x = 0;
console.log(x++); // 0
console.log(x); // 1

let y = 0;
console.log(++y); // 1
console.log(y); // 1

for (let i = 0; i < 10; i += 5) {
  console.log(i);
} // 0 en 5 worden gelogd

for (let i = 0; i === 1; i++) {
  console.log("Wordt ik uitgevoerd?");
} // wordt nooit uitgevoerd!

// StackOverflow
/* for (let i = 0; i < 1; i--) {
  console.log("Wat nu");
} */
