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
  let point1 = null;
  let point2 = this.head;
  let point3;

  while (point2) {
    point3 = point2.next;
    point2.next = point1;
    point1 = point2;
    point2 = point3;
  }

  this.head = point1;
  return this.head;
}

module.exports = {
  Node: Node,
  reverseLinkedList: reverseLinkedList
};
