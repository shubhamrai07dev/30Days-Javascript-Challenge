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


const personInstance = new Person("Alice", 30);


console.log(personInstance.getGreeting());

// Update the age property
personInstance.updateAge(31);

console.log(`Updated age: ${personInstance.age}`);
