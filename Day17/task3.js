class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(value) {
    this.items.push(value);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack after pushing elements:");
console.log(stack.items);

console.log("Peek top element:");
console.log(stack.peek());

console.log("Pop top element:");
console.log(stack.pop());

console.log("Stack after popping an element:");
console.log(stack.items);
