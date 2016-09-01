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
  if (!l1) return l2;
  if (!l2) return l1;

  let c1 = l1;
  let c2 = l2;
  let p1 = null;
  let p2 = null;
  while (c2) {
    p1 = c1.next;
    c1.next = c2;
    p2 = c2.next;
    if (p1) c2.next = p1;
    c1 = p1;
    if (p2) c1.next = p2;
    c2 = p2;
  }

};

module.exports = {Node: Node, zip: zip};
