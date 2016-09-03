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
  if (!head || !head.next) {
    return head;
  }
  let reverseList;
  for (let i = head; i; i = i.next) {
    if (i.next === null) {
      reverseList = i;
    }
  }
  while (reverseList.next !== head) {
    for (let i = head; i; i = i.next) {
      if (i.next === reverseList) {
        reverseList.next = i;
      }
    }
  }
  head = reverseList;
  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
