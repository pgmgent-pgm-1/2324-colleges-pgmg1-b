const $container = document.getElementById("clock-digital__container");

const padTime = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};
const generateDigitalClockUTCAsString = (utc, cityName) => {
  const date = new Date();
  // omdat we enkel met uren bezig zijn werkt onderstaande
  date.setHours(date.getHours() + utc + date.getTimezoneOffset() / 60);
  const hours = padTime(date.getHours());
  const minutes = padTime(date.getMinutes());
  const seconds = padTime(date.getSeconds());

  return `The time in ${cityName} is ${hours}:${minutes}:${seconds}`;
};

$container.innerHTML = generateDigitalClockUTCAsString(2, "Ghent");

setInterval(function () {
  $container.innerHTML = generateDigitalClockUTCAsString(2, "Ghent");
}, 1000);
