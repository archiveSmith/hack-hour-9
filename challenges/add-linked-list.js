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
  const numOne = getNum(l1), numTwo = getNum(l2);
  return numOne ? (numTwo ? numOne + numTwo : numOne) : (numTwo ? numTwo : 0);
  
}
function getNum(list) {
  let str = '', cur = list;
  while (cur) {
    str = cur.value + str;
    cur = cur.next;
  }
  return Number(str)
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
