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
	// traverse down l1 and l2, one node at a time, if sum of the 2 digits (including any carry over) greater than 9, need to carry over the 1 over to next digit
	// create the node for the sum of digits

	var carryOver = 0;
	var n;
	var temp;
	var p1 = l1;
	var p2 = l2;
	
	while(p1 !== null || p2 !== null) {
		
		var sum = carryOver;
		
		if(p1 !== null) {
			sum += p1.value;
			p1 = p1.next;
		}
		
		if(p2 !== null) {
			sum += p2.value;
			p2 = p2.next;
		}
		
		// calculate new carry over and current sum digit
		if(sum >= 10) {
			carryOver = 1;
			sum = sum - 10;
		} else {
			carryOver = 0;
		}
		
		if(! n) { // create head of output
			n = new Node(sum);
			temp = n;
		} else { // add to output list
			temp.next = new Node(sum);
			temp = temp.next;
		}
	}
	
	// edge case - check for remaining carryOver
	if(carryOver === 1) {
		temp.next = new Node(carryOver);
		carryOver = 0;
	}
	
	return n;
}

/*
var n1 = new Node(3);
var n2 = new Node(1);
var n3 = new Node(5);
n1.next = n2;
n2.next = n3;

var n4 = new Node(5);
var n5 = new Node(9);
var n6 = new Node(2);
n4.next = n5;
n5.next = n6;

console.log(addLinkedList(n1, n4));
*/

module.exports = {Node: Node, addLinkedList: addLinkedList};
