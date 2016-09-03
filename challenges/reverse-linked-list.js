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
    this.prev = null;
}

function reverseLinkedList(head) {
	let backTracker = new Node(head.value);
	while(head.next) {
		temp = backTracker;
		backTracker.prev = new Node(head.next.value);
		backTracker = backTracker.prev;
		backTracker.next = temp;
		head = head.next;
	}
	let newHead = head;
	newHead.next = backTracker;
	return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
