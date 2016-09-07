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
  let first = true;
  while (l1.next && l2.next) {
    if (first) {
      this.head = l1.head;
      this.tail = l2.head;
      first = false;
    } else {
      this.tail = l1.next;
      this.tail.next = l2.next;
    }
  }

};

module.exports = {Node: Node, zip: zip};
