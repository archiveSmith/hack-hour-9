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
	if (!l1) return l2;
  if (!l2) return l1;

  let iterator1 = l1;
  let iterator2 = l2;

  let result;
  let resultIterator;

  let digitSum = iterator1.value + iterator2.value;
  let carry = 0;

  if (digitSum >=10) {
    carry = 1;
    digitSum -= 10;
  }

  result = resultIterator = new Node(digitSum);

  iterator1 = iterator1.next;
  iterator2 = iterator2.next;

  while (iterator1 && iterator2) {
    digitSum = iterator1.value + iterator2.value + carry;

    if (digitSum >= 10) {
      carry = 1;
      digitSum -= 10;
    } else {
      carry = 0;
    }

    resultIterator.next = new Node(digitSum);

    resultIterator = resultIterator.next;
    iterator1 = iterator1.next;
    iterator2 = iterator2.next;
  }

  if (iterator1) resultIterator.next = iterator1;
  else if (iterator2) resultIterator.next = iterator2;

  return result;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
