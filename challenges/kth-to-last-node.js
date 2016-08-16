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
  let count = 0;
  let currentNode = head;
  
  while (currentNode.next) {
    count++;
    currentNode = currentNode.next;
  }
  
  if (count > k) {
    //reset currentNode to head;
    currentNode = head;
 
  //get the (k-count+1)th node from the begining // 4-2+1 = 3
    let loopEnd = count-k+1;
    for (let i = 0; i < loopEnd; i++) {
       currentNode = currentNode.next;
    }
    return currentNode;
  }
  return undefined;
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
