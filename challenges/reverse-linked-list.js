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
  let originalHead = head;
  let i = originalHead;
  let count = 0;
  while (i.next) {
    oldI = i;
    if (count === 0) {
      i = null;
    }
    i.next.next = oldI;
    head = i.next;
    count++;
  }
  return head;
}

module.exports = {
  Node: Node,
  reverseLinkedList: reverseLinkedList
};
