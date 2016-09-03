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

  head.forwardLink = head.next;
  head.next = null;

  let lead = head.forwardLink;
  let follow = head;

  // Ierate through nodes, setting 'next' property to
  // the one behind and following 'forwardLink' forward
  while(lead) {
    lead.forwardLink = lead.next;
    lead.next = follow;

    lead = lead.forwardLink;
    follow = follow.forwardLink;
  }

  // Set the new head to be the previous end
  head = follow;

  // Iterate through the newly reversed list
  // deleting the 'forwardLink' property
  while(follow) {
    delete follow.forwardLink;

    follow = follow.next;
  }

  return head;


}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
