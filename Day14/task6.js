class Students {
  static count = 0;

  constructor(name) {
    this.name = name;
    Students.count++;
    console.log(`Number of students created: ${Students.count}`);
  }
}

// Example usage
const student1 = new Students("rohit");
const student2 = new Students("rahul");
const student3 = new Students("raghu");
