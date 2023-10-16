console.log("Start");

setTimeout(function () {
  console.log("Hallo");
}, 2 * 1000);

console.log("Einde");

setInterval(function () {
  const date = new Date();
  console.log(`${date.getMinutes()}:${date.getSeconds()}`);
}, 3 * 1000);
