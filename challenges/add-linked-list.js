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
	var carry = 0;
	var valToSet = 0;
	
	while(l1.next && l2.next) {
		if(!head) {
			if (l1.value + l2.value >= 10) {
				carry = 1;
				valToSet = (l1.value + l2.value) % 10;
			}
			else {valToSet = l1.value + l2.value}
			var head = new Node(valToSet);
			var current = head;
		} else {
			var prevCarry = carry;
			l1 = l1.next;
			l2 = l2.next;
			
			if (l1.value + l2.value >= 10) {
				carry = 1;
				valToSet = (l1.value + l2.value) % 10 + prevCarry;
			}
			else {valToSet = l1.value + l2.value + prevCarry}
			
			let temp = new Node(valToSet)
			current.next = temp;
			current = current.next;
			
			}
		}
	return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
