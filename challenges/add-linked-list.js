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
	if(l1 === null && l2 === null) return undefined;
	sumL1 = parseInt(reverseLinkedList(l1));
	sumL2 = parseInt(reverseLinkedList(l2));
	total = sumL1 + sumL2;
	let reverseL = JSON.stringify(total).split("").reverse();

	let resultL = new Node();
	let temp = resultL;
	for(let i = 0; i < reverseL.length; i++) {
		temp.value = reverseL[i];
		temp.next = i === reverseL.length - 1 ? null : new Node();
		temp = temp.next; 
	}
	return resultL;
}

function reverseLinkedList(head) {
	if(head === null) return "0"; 
	let newAr = [];
	let currentNode = head;
	while(currentNode) {
		newAr.push(currentNode.value);
		currentNode = currentNode.next; 
	}
	return newAr.reverse().join(''); 
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
