const color = "yellow";

if (color === "blue") {
  console.log("De kleur is blauw");
} else if (color === "yellow") {
  console.log("De kleur is geel");
} else if (color === "red") {
  console.log("De kleur is rood");
} else if (color === "orange") {
  console.log("De kleur is oranje");
} else {
  console.log("De kleur is niet gekend");
}

switch (color) {
  case "blue":
    console.log("De kleur is blauw");
    break;
  case "yellow":
    console.log("De kleur is geel");
    break;
  case "red":
    console.log("De kleur is rood");
    break;
  case "orange":
    console.log("De kleur is oranje");
    break;
  default:
    console.log("De kleur is niet gekend");
    break;
}
