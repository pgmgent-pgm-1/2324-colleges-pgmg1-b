// string index
const color = "yellow";
console.log(color[0]); // y
console.log(color[1]); // e
console.log(color.length); // 6

// array
const names = ["Michael", "Wachem", "Philippe", "Adriaan"]; // array
// const items = [9, true, "a", "x", 10.3];

const nameOne = names[0];
console.log(nameOne); // Michael
console.log(names.length); // 4
console.log(names[names.length - 1]); // laatste item
console.log(names[10]);

const socialMedia = [
  "Facebook",
  "X",
  "Instagram",
  "MySpace",
  "TikTok",
  "Netlog",
  "Discord",
];

for (let i = 0; i < socialMedia.length; i++) {
  console.log(`${socialMedia[i]} is een social media platform`);
}
