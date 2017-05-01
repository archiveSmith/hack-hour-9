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

// POSSIBLE SOLUTIONS
// 1) Use a doubly linked list
// 2) Create an array to hold the nodes, and get the node at array.length - k - 1
// 3) Find the length of the list, then traverse the list to retrieve the node at length - k

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let counter = 1;
  let currentNode = head;

  while (currentNode.next !== null) {
    counter++;
    currentNode = currentNode.next;
  }

  currentNode = head;

  for (let i = 0; i < counter - k; i++) {
    currentNode = currentNode.next;
  }

  return (!currentNode || k > counter) ? undefined : currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
