const disneyMovies = [
  {
    title: "Frozen",
    watched: true,
    duration: 100,
    characters: ["Elza", "Olaf"],
  },
  {
    title: "Cars",
    watched: false,
    duration: 110,
    characters: ["Lightning McQueen", "Takel", "Luigi"],
  },
  {
    title: "Jungle Book",
    watched: true,
    duration: 90,
    characters: ["Mowgli", "Baloe"],
  },
  {
    title: "The Lion King",
    watched: true,
    duration: 140,
    characters: ["Simba", "Mufasa", "Poemba", "Rafiki"],
  },
];

const $list = document.getElementById("list");

function getHTMLForCharacters(characters) {
  let html = "";
  for (const char of characters) {
    html += `<li>${char}</li>`;
  }
  return html;
}

function getHTMLForMovies(movies) {
  let html = "";
  for (const movie of movies) {
    html += `
    <li>
      <h2>${movie.title}</h2>
      <p>Duration: ${movie.duration}</p>
      <ul>
        ${getHTMLForCharacters(movie.characters)}
      </ul>
    </li>
  `;
  }
  return html;
}

$list.innerHTML = getHTMLForMovies(disneyMovies);

$btnGrid = document.getElementById("btn-grid");
$btnGrid.addEventListener("click", function () {
  if ($list.classList.contains("grid")) {
    $list.classList.remove("grid");
  } else {
    $list.classList.add("grid");
  }
});

$btnBox = document.getElementById("btn-box");
$box = document.getElementById("box");
$btnBox.addEventListener("click", function () {
  $box.classList.toggle("box--circle");
});
