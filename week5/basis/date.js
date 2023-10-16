const date = new Date();
console.log(date.getTime());

const date2 = new Date(1697364060000);
console.log(date2);
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getFullYear());
console.log(date2.getUTCHours());

console.log(`${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()}`);
