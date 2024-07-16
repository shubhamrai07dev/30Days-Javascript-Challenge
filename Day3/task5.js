function getGrade(marks) {
  let grade;
  switch (true) {
    case marks >= 90 && marks <= 100:
      grade = "A";
      break;
    case marks >= 80 && marks < 90:
      grade = "B";
      break;
    case marks >= 70 && marks < 80:
      grade = "C";
      break;
    case marks >= 60 && marks < 70:
      grade = "D";
      break;
    case marks >= 50 && marks < 60:
      grade = "E";
      break;
    default:
      grade = "worst grade";
      break;
  }
  console.log(grade);
}

getGrade(62);
