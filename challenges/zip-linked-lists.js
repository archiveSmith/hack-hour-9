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
  let l2Arr = [];
  for (i = l2; i.next; i = i.next) {
    l2Arr.push([i]);
  }
  for (i = l1; i.next; i = i.next) {
    let oldNext = i.next;
    i.next = l2Arr[i]
    i.next.next = oldNext;
  }
  return l1;
};

module.exports = {
  Node: Node,
  zip: zip
};
