const studentInfo = {
  firstName: "Michael",
  lastName: "Vanderpoorten",
  gender: 0,
  dayOfBirth: 705575793000,
  courses: [
    {
      name: "Computer Systems",
      lecturers: ["Adriaan Glibert", "Claire Geeraerts"],
    },
    {
      name: "Programming 1",
      lecturers: ["Michael Vanderpoorten", "Philippe De Pauw Waterschoot"],
    },
    {
      name: "Web Design",
      lecturers: ["Wachem Huyge", "Evelien Rutsaert"],
    },
  ],
};

function generateStringForGender(genderCode) {
  if (genderCode === 0) {
    return "Male";
  } else if (genderCode === 1) {
    return "Female";
  } else {
    return "x";
  }

  // andere optie
  switch (genderCode) {
    case 0:
      return "Male";
    case 1:
      return "Female";
    default:
      return "x";
  }
}

function generateStringForLecturers(lecturers) {
  return lecturers.join(", ");
}

function generateStringForCoursesAlt(courses) {
  return courses
    .map((course) => {
      return `
Course: ${course.name}
Lecturers: ${generateStringForLecturers(course.lecturers)}`;
    })
    .join("\n------------------------------------------------");
}

function generateStringForCourses(courses) {
  let output = "";
  for (const course of courses) {
    output += `
Course: ${course.name}
Lecturers: ${generateStringForLecturers(course.lecturers)}
------------------------------------------------`;
  }
  return output;
}

function generateStringForStudent(student) {
  return `  
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.lastName}
Gender: ${generateStringForGender(student.gender)}
Day of birth: ${new Date(student.dayOfBirth).toLocaleDateString()}
======================================================
COURSES
======================================================
${generateStringForCoursesAlt(student.courses)}
======================================================
  `;
}

const template = generateStringForStudent(studentInfo);
console.log(template);
