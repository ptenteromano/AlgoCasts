// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor(data, node) {
    this.head = null;
    this.numNodes = 0;
  }

  /**
   *
   * Setters
   *
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.numNodes++;
  }

  insertLast(data) {
    const newLast = new Node(data, null);
    this.numNodes++;

    let node = this.head;

    if (!node) {
      this.head = newLast;
      return;
    }

    while (node) {
      if (!node.next) {
        node.next = newLast;
        return;
      }

      node = node.next;
    }
  }

  insertAt(data, index) {
    if (index > this.numNodes || index < 0) index = this.numNodes;

    const newNode = new Node(data, null);
    this.numNodes++;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    const beforeIndex = this.getAt(index - 1);
    const afterIndex = beforeIndex.next;

    beforeIndex.next = newNode;
    newNode.next = afterIndex;
  }

  /**
   *
   * Getters
   *
   */
  size() {
    return this.numNodes;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.getAt(this.numNodes - 1);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }

    return null;
  }

  removeFirst() {
    const firstNode = this.head;
    if (firstNode) {
      this.head = firstNode.next;
      this.numNodes--;
    }
  }

  /**
   *
   * Removers
   *
   */
  removeLast() {
    if (this.numNodes <= 1) {
      this.removeFirst();
      return;
    }

    const secondToLast = this.getAt(this.numNodes - 2);

    secondToLast.next = null;
    this.numNodes--;
  }

  removeAt(index) {
    const previous = this.getAt(index - 1);
    const toBeRemoved = this.getAt(index);

    if (!toBeRemoved) return;

    this.numNodes--;

    if (!previous) {
      this.head = toBeRemoved.next;
      return;
    }

    previous.next = toBeRemoved.next;
  }

  clear() {
    this.head = null;
    this.numNodes = 0;
  }

  /**
   *
   * Transformers
   *
   */
  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
