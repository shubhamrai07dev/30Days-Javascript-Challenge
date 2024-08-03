class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1); // Node { value: 1, next: Node { value: 2, next: null } }
console.log(node2); // Node { value: 2, next: null }
