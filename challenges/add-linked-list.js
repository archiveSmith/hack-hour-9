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
	let str1 = '';
	let str2 = '';
	str1 += JSON.stringify(l1.value)
	str2 += JSON.stringify(l2.value);

	while(l1.next) {
		str1 = JSON.stringify(l1.next.value) + str1;
		l1 = l1.next;
	}

	while(l2.next) {
		str2 = JSON.stringify(l2.next.value) + str2;
		l2 = l2.next;
	}

	let str3 = (Number(str1) + Number(str2)).toString().split('');

	let result = new Node(Number(str3.pop()));
	let curr = result;

	while(str3.length) {
		curr.next = new Node(Number(str3.pop()));
		curr = curr.next
	}
	
	return result;
	
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
