/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	
	var newHead = null; // the new head of list to return
	var temp = head; // the temp ptr for manipulation
	
	while(head !== null) {
		
		// advance head to next node in original list
		head = head.next;
		
		// add current node to front of new list
		temp.next = newHead;
		
		// move head of new list to point to the just added current node
		newHead = temp;
		
		// advance temp to head to process the next node in original list
		temp = head;		
	}

	return newHead;

}

/* tests */
/*
var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);

n1.next = n2;
n2.next = n3;

var curr = n1;

console.log('before'); // expect 1,2,3
while(curr !== null) {
	console.log(curr.value);
	curr = curr.next;
}

var newHead = reverseLinkedList(n1);

curr = newHead;

console.log('after'); // expect 3,2,1
while(curr !== null) {
	console.log(curr.value);
	curr = curr.next;
}

*/

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
