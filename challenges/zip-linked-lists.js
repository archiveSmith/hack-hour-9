/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let cur = l1,
    head = l2,
    nextHead;
  while (head && nextHead) {
    nextHead = cur.next;
    cur.next = head;
    head = head.next;
    cur = cur.next;
    cur.next = nextHead || head;
  }
  return l1;
}

module.exports = {Node: Node, zip: zip};
