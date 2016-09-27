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
		if (!l1 && !l2) return null;
		if (!l1) return l2;
		if (!l2) return l1;
		let sum = l1.value + l2.value;
		let head = new Node(sum);
		head.next = addList(l1.next, l2.next)
		return head;
	}
	function reduceList(l) {
		let carry = 0;
		let tail = l;
		for (let node = l; node; node = node.next) {
			node.value = node.value + carry;
			if (node.value > 9) {
				carry = Math.floor(node.value / 10);
				node.value = node.value % 10;
			}
			tail = node;
		}
		if (carry) {
			tail.next = new Node(carry);
		}
		return l;
	}
	return reduceList(addList(l1, l2))
}



module.exports = {Node: Node, addLinkedList: addLinkedList};
