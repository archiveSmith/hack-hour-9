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
  const num1 = calcNumFromLinkedList(l1);
  const num2 = calcNumFromLinkedList(l2);
  const sumString = (num1 + num2).toString();

  let currNode = new Node(Number(sumString[sumString.length - 1]));
  const sumListHead = currNode;

  for (let i = sumString.length - 2; i >= 0; i--) {
    const digit = Number(sumString[i]);
    currNode.next = new Node(digit);
    currNode = currNode.next;
  }

  return sumListHead;
}

function calcNumFromLinkedList(list) {
  let number = '';

  while (list) {
    number = list.value.toString() + number;
    list = list.next;
  }

  return Number(number);
}

// const a1 = new Node(3);
// const a2 = new Node(1);
// const a3 = new Node(6);

// a2.next = a3;
// a1.next = a2;

// const b0 = new Node(2);
// const b1 = new Node(5);
// const b2 = new Node(9);
// const b3 = new Node(2);

// b2.next = b3;
// b1.next = b2;
// b0.next = b1;

// addLinkedList(a1, b0);

module.exports = { Node, addLinkedList };
