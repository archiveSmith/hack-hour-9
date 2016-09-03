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
	var back = null;
	var x = head;
	var t;
	while (x !== null) {
		t = x.next;
		x.next = back;
		back = x;
		x = t;		
	}
	head = back;
	return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
