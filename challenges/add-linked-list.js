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
  let result;
  let resultIndex;
  let i1 = l1;
  let i2 = l2;
  let sum = i1.value + i2.value;
  let numCarry = 0;
  i1 = i1.next;
  i2 = i2.next;

  if (sum >= 10) {
    numCarry = 1;
    sum -= 10;
  }

  result = resultIndex = new Node(sum);

  while (i1 && i2) {
    sum = i1.value + i2.value + numCarry;

    if (sum >= 10) {
      sum -= 10;
      numCarry = 1;
    } else {
      numCarry = 0;
    }
    i1 = i1.next;
    i2 = i2.next;
    resultIndex.next = new Node(sum);
    resultIndex = resultIndex.next;
  }

  if (i1) {
    resultIndex.next = i1;
  } else if (i2) {
    resultIndex.next = i2;
  }

  return result;
}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
