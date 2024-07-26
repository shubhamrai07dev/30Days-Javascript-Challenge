class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
  }
}

class Students extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  getStudentID() {
    return `Student ID: ${this.studentID}`;
  }

  // Override the getGreeting method
  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }
}

const studentInstance = new Students("Bob", 20, "S123456");

// Log the overridden greeting message
console.log(studentInstance.getGreeting());
