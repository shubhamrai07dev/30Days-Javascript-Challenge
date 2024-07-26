class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greeting message
  static getGenericGreeting() {
    return "Hello, welcome to our community!";
  }
}

console.log(Person.getGenericGreeting());
