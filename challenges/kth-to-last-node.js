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
  let nodeObj = {};
  let currentNode = head;
  let nodeCount = 0;

  while(currentNode !== null){
    if (currentNode.next !== null){
      ++nodeCount;
      nodeObj[nodeCount] = currentNode.value;
      currentNode = currentNode.next;
   //   console.log(nodeCount);
    } else{
      ++nodeCount;
        nodeObj[nodeCount] = currentNode.value;
    break;
    }
  }
 // console.log(nodeObj);
  return nodeObj[nodeCount - (k-1)]
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
