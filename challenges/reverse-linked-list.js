/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let nodes = [];
  let currentNode = head;

  while (currentNode) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  nodes.reverse();
  currentNode = nodes[nodes.length - 1];

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1];
  }

  nodes[nodes.length - 1].next = null;
  return nodes[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

// reverse linked list in place

// function reverseLinkedList(head) {
//   let currentNode = head,
//   let newHead = head;
//   let length = 1;
//   let index;

//   while (currentNode.next) {
//     newHead = currentNode.next;
//     currentNode = currentNode.next;
//     length++;
//   }
  
//   index = length - 1;

//   for (let i = 0; i < index; i++) {

//   }

//   return newHead;
// }