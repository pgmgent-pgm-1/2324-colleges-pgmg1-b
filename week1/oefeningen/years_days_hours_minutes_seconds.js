let seconds = 99876483;

const secondsInYear = 60 * 60 * 24 * 365;
const secondsInDay = 60 * 60 * 24;
const secondsInHour = 60 * 60;
const secondsInMinute = 60;

const years = Math.floor(seconds / secondsInYear);
// seconds = seconds - years * secondsInYear;
seconds = seconds % secondsInYear;
const days = Math.floor(seconds / secondsInDay);
seconds = seconds % secondsInDay;
const hours = Math.floor(seconds / secondsInHour);
seconds = seconds % secondsInHour;
const minutes = Math.floor(seconds / secondsInMinute);
seconds = seconds % secondsInMinute;

console.log(`
======================================================
${years}years ${days}days ${hours}hours ${minutes}minutes ${seconds}s
======================================================
`);
