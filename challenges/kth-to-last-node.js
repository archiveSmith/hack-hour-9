/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.kthToLastNode = function(k) {
  const kthIndex = this.count - k;
  let currentNode = this.head;
  for (let i = 0; i < kthIndex; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

// adds node to end of list
LinkedList.prototype.push = function(value) {
  const newNode = new Node(value);
  this.count++;
  if (this.head === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
