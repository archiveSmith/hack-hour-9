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
  // when there's only one list its already zipped
  if (!l1) { return l2; }
  if (!l2) { return l1; }

  // While we're not at the end of either list, add both, starting with the first
  let theTip = l1;
  let temp = l1;
  let l1 = l1.next;
  while (l2 && l1) {
    temp.next = l2;
    l2 = l2.next;
    temp = temp.next;

    temp.next = l1;
    l1 = l1.next;
    temp = temp.next;
  }

  temp.next = l2 ? l2 : l1;

  return theTip;

};

module.exports = {Node: Node, zip: zip};
