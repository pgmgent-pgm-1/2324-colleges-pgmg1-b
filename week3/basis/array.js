const genres = ["jazz", "pop", "techno", "acid", "hip-hop"];

// for
for (let i = 0; i < genres.length; i++) {
  console.log(`${genres[i]} is een genre`);
}

// for ... of
for (const genre of genres) {
  console.log(`-- ${genre} is een genre`);
}

// foreach
genres.forEach(function (genre) {
  console.log(`** ${genre} is een genre`);
});

// join: van array (van strings) naar string
const line = genres.join(" -- "); // line is een string
console.log(line);

// split: van string naar array
const sentence = "Dit is een zin";
console.log(sentence.split(" "));
