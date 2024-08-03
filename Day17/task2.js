class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Remove a node from the end of the list
  remove() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  // Display all nodes in the list
  display() {
    if (this.head === null) {
      console.log("The list is empty");
      return;
    }
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log("Linked list after adding nodes:");
linkedList.display();

linkedList.remove();
console.log("Linked list after removing the last node:");
linkedList.display();
