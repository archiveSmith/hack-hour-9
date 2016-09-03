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
  if (!head) {
    return head;
  }
  let nextNode;
  let last = null;
  for (let currentNode = head; currentNode; currentNode = nextNode) {
    nextNode = currentNode.next;
    currentNode.next = last;
    last = currentNode;
  }
  return last;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
