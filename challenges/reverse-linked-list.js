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
  // Argument error checking
  if (head === null) return null;
  if (head === undefined) return undefined;

  // If the list has length 1, no computation is necessary
  if (!head.next) return head;

  let newHead = reverseLinkedList(head.next);

  let secondToLast = getTail(newHead);
  secondToLast.next = head;
  head.next = null;

  return newHead;
}


function getTail(head) {
  let iterator = head;

  while(iterator.next) {
    iterator = iterator.next;
  }

  return iterator;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
