class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const personInstance = new Person("Alice", 30);

console.log(personInstance.getGreeting());
