/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function reverseLinkedList(head) {
  if (!head.next) return head;

  // Base case - if there are only two nodes, reverse the nodes
  if (!head.next.next) {
    const curr = head.next;
    head.next = null;
    curr.next = head;
    return curr;
  }

  // If there are more than two nodes, reverse the linked list recursively
  const reversedList = reverseLinkedList(head.next);
  let current = reversedList;
  while (current.next) {
    current = current.next;
  }

  head.next = null;
  current.next = head;
  return reversedList;
}

module.exports = { Node, reverseLinkedList };

// const node3 = new Node(3);
// const node2 = new Node(2, node3);
// const node1 = new Node(1, node2);
// reverseLinkedList(node1);


// Original solution - store nodes in an array, reverse the array, and reassign next values

// function reverseLinkedList(head) {
//   let nodes = [];
//   let currentNode = head;

//   while (currentNode) {
//     nodes.push(currentNode);
//     currentNode = currentNode.next;
//   }

//   nodes.reverse();
//   currentNode = nodes[nodes.length - 1];

//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].next = nodes[i + 1];
//   }

//   nodes[nodes.length - 1].next = null;
//   return nodes[0];
// }
