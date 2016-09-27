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
	function addList(l1, l2, carry) {
		if (!l1 && !l2) return (carry) ? new Node(carry) : null;
		if (!l1) return l2;
		if (!l2) return l1;
		l1.value = l1.value + carry;
		let sum = l1.value + l2.value;
		let c = Math.floor(sum / 10);
		let rem = sum % 10;
		let head = new Node(rem);
		if (carry && !l1.next) {
			head.next = addList(new Node(carry), l2.next, 0);
		} else if (carry && !l2.next) {
			head.next = addList(new Node(carry), l1.next, 0);
		} else {
			head.next = addList(l1.next, l2.next, c);
		}
		return head;
	}
	return addList(l1, l2, 0);
}


module.exports = {Node: Node, addLinkedList: addLinkedList};
