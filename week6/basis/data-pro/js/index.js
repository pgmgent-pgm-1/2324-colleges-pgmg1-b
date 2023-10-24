(() => {
  // get elements from dom
  const $list = document.getElementById("list");
  const $detail = document.getElementById("detail");

  // functions
  const generateHTMLForMovies = (movies) => {
    let html = "";

    for (const movie of movies) {
      html += `
        <li data-id="${movie.id}">
          <h2>${movie.title}</h2>
          <p>${movie.watched ? "Gezien" : "Nog niet gezien"}</p>
        </li>
      `;
    }

    return html;
  };

  const generateHTMLForDetail = (movie) => {
    return `
      <h2>${movie.title} (${movie.duration} minutes)</h2>
      <p>${movie.watched ? "Gezien" : "Niet gezien"}</p>
      <p>Characters: ${movie.characters.join(", ")}</p>
    `;
  };

  // add event listeners
  const registerListeners = () => {
    console.log("3. Add interaction!");
    const $items = document.querySelectorAll(".list li");

    for (const $item of $items) {
      $item.addEventListener("click", function (e) {
        // get the id from e.g. data-id="2" through dataset
        const id = e.currentTarget.dataset.id; // string
        const movie = disneyMovies.find((movie) => {
          return movie.id === parseInt(id); // number
        });
        $detail.innerHTML = generateHTMLForDetail(movie);
      });
    }
  };

  const buildUI = () => {
    console.log("2. Build user interface!");
    $list.innerHTML = generateHTMLForMovies(disneyMovies);
  };

  // start of application
  const initialize = () => {
    console.log("1. Application started!");
    buildUI();
    registerListeners();
  };

  initialize();
})();
