/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function reverseLinkedList(head) {
  let value = head;
  let previous = null;

  while(value) {
    let save = value.next;
    value.next = previous;
    previous = value;
    value = save;
  }
  return previous; 
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
