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
  console.log(head);
  let counter = 1;
  //checking if head has a next
  let headNext = head.next;
  console.log(headNext);
  for (let node = head; node; node = node.next) {
    // while (node.next) {
    // currentNode = currentNode.next;
    // }
  	console.log(node);
    if (!headNext && counter > 1) {
    	node.next = node;
    	console.log(node);
    }
    console.log(node.next);
    if (counter === k) {
      return  node.value;
    }
    counter++;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
