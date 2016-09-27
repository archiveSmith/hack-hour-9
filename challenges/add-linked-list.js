/* You have two numbers represented by linked lists. 
// Each node contains a single digit. 
// The digits are stored in reverse order, 
// such that the 1's digit is at the head of the list. 
// Write a function that adds the two numbers 
// and returns the sum as a linked list with the same structure.
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
	let num1 = getNumber(l1);
	let num2 = getNumber(l2);	

	function getNumber(list) {
		let listStr = '';
		while (list) {
 			listStr = list.value.toString() + listStr;
 			list = list.next
		}
		return listStr;
	}
	
	console.log(num1, num2)
	
	return parseInt(num1) + parseInt(num2);
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
