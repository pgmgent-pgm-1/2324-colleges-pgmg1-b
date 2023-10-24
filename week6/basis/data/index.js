const disneyMovies = [
  {
    id: 1,
    title: "Frozen",
    watched: true,
    duration: 100,
    characters: ["Elza", "Olaf"],
  },
  {
    id: 2,
    title: "Cars",
    watched: false,
    duration: 110,
    characters: ["Lightning McQueen", "Takel", "Luigi"],
  },
  {
    id: 3,
    title: "Jungle Book",
    watched: true,
    duration: 90,
    characters: ["Mowgli", "Baloe"],
  },
  {
    id: 4,
    title: "The Lion King",
    watched: true,
    duration: 140,
    characters: ["Simba", "Mufasa", "Poemba", "Rafiki"],
  },
];

const $list = document.getElementById("list");

function getHTMLForMovies(movies) {
  let html = "";
  for (const movie of movies) {
    html += `
    <li data-id="${movie.id}">
      <h2>${movie.title}</h2>
      <p>Duration: ${movie.duration}</p>
    </li>
  `;
  }
  return html;
}

$list.innerHTML = getHTMLForMovies(disneyMovies);

const $items = document.querySelectorAll(".list li");
const $detail = document.getElementById("detail");

for (const $item of $items) {
  $item.addEventListener("click", function (e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const movie = disneyMovies.find((movie) => {
      return movie.id === id;
    });
    $detail.innerHTML = `
      <h2>${movie.title}</h2>
      <p>${movie.watched ? "Gezien" : "Niet gezien"}</p>
      <p>Characters: ${movie.characters.join(", ")}</p>
    `;
  });
}
