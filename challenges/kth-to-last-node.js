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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // loop through k nodes
  var kNode = head;
  for (var i = 0; i < k; i++) {
    kNode = kNode.next;
  }

  // loop through from head, use kNOde as lead, when kNode is null, return
  // current.value
  for (var current = head; kNode; current = current.next) {
    kNode = kNode.next;
  }
  return current.value;
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// var f = new Node('F');
// var g = new Node('G');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;

// console.log(kthToLastNode(3, a))
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
