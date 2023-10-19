const students = [
  {
    firstName: "Philippe",
    lastName: "De Pauw - Waterschoot",
    email: "pdp@arteveldehs.be",
    thumbnail: "images/philippe.png",
  },
  {
    firstName: "Evelien",
    lastName: "Rutsaert",
    email: "er@arteveldehs.be",
    thumbnail: "images/evelien.png",
  },
  {
    firstName: "Olivier",
    lastName: "Parent",
    email: "op@arteveldehs.be",
    thumbnail: "images/olivier.png",
  },
];

const convertStudentToHTMLString = (student) => {
  return `
    <div>
      <h2>${student.firstName} ${student.lastName}</h2>
      <img src="${student.thumbnail}" />
      <a href="mailto:${student.email}">${student.email}</a>
    </div>
  `;
};

// optie 1
let html = "";
for (const student of students) {
  html += convertStudentToHTMLString(student);
}

// optie 2
const html2 = students.map((student) => convertStudentToHTMLString(student)).join("");

const $students = document.getElementById("students");
$students.innerHTML = html;
