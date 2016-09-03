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
	let curr = head;
	let prev = null;
	let next;

	
	while(curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	
	head = prev;
	return head;


}

var linkedlist = new Node(1);
linkedlist.next = new Node(2);
linkedlist.next.next = new Node(3);
linkedlist.next.next.next = new Node(4);


reverseLinkedList(linkedlist)

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
