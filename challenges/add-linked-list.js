/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {

  let val = 0;
  let prev;
  let l3;

  while (l1 !== null || l2 !== null) {
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    if (prev) {
      prev.next = new Node(val % 10);
      prev = prev.next;
    } else {
      l3 = new Node(val % 10);
      prev = l3;
    }
    val = val / 10 | 0;
  }

  if (val) {
    prev.next = new Node(val);
  }
  return l3;
}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
