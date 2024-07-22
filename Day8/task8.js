const name = "ravi";
const age = 30;

const person = {
  name,
  age,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

console.log(person);

person.greet();
