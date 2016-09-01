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
  newl = new Node(l1.value);
  newl.next = new Node(l2.value);

  let oldNext = newl.head.next;
  newl.head.next = l2.head;
  let L2OldNext = l2.head.next;
  l2.head.next = oldNext;


  return newl;
};

module.exports = {
  Node: Node,
  zip: zip
};
