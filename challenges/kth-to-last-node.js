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
//takes an number and head of a linked list
//goes through the linked list
//returns the value at the kth node.


function kthToLastNode(k, head) { 
  var finalVal;
  
  if (k <= 0 || head.value === null){
    return undefined;
  }

  while (k > 0){
    finalVal = head.value;
    head = head.next;
    k--;
  }
  return finalVal;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(kthToLastNode(0,node1));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
