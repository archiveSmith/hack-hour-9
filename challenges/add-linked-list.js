/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function addLinkedList(l1, l2) {
	let sumList = new Node();
	let carry = 0;

	function recur(node, carry) {
		if (!l1 && l2) {
			node.value = l2.value;
			l2 = l2.next;
			node.next = new Node();
			recur(node.next);
		} else if (l1 && !l2) {
			node.value = l1.value;
			l1 = l1.next;
			node.next = new Node();
			recur(node.next);
		} else if (l1 && l2) {
			if ((l1.value + l2.value) >= 10) {
				node.value = l1.value + l2.value - 10;
				carry = 1;
			} else {
				node.value = l1.value + l2.value;
			}
			
			l1 = l1.next;
			l2 = l2.next;
			
			node.next = new Node();
			recur(node.next);
		} 
	}

	recur(sumList, 0);
	return sumList;
}

function Node(val) {
  this.value = val;
  this.next = null;
}


// while both exist, add sum and 

module.exports = {Node: Node, addLinkedList: addLinkedList};
