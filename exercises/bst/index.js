// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }

  insertIterative(data) {
    const newNode = new Node(data);
    let node = this;

    while (node)
      if (data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          node = null;
        } else node = node.left;
      } else if (data >= node.data) {
        if (node.right === null) {
          node.right = newNode;
          node = null;
        } else node = node.right;
      }
  }

  containsIterative(data) {
    let node = this;

    while (node) {
      if (data === node.data) return node;
      if (data < node.data) {
        node = node.left;
      } else if (data >= node.data) {
        node = node.right;
      }
    }

    return null;
  }

  // --------------------------
  insert(data) {
    if (data < this.data) {
      if (this.left) this.left.insert(data);
      else this.left = new Node(data);
    }

    if (data >= this.data) {
      if (this.right) this.right.insert(data);
      else this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) return this;

    if (data < this.data) {
      if (this.left) return this.left.contains(data);
      else return null;
    }

    if (data >= this.data) {
      if (this.right) return this.right.contains(data);
      else return null;
    }
  }
}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(17);

console.log(n);

module.exports = Node;
