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
  


}

let first = new Node(3);
let sec = new Node(1);
let thir = new Node(5);

first.next = sec;
first.next.next = thir;

let first2 = new Node(5);
let sec2 = new Node(9);
let thir2 = new Node(2);

first2.next = sec2;
first2.next.next = thir2;

addLinkedList(first, first2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
