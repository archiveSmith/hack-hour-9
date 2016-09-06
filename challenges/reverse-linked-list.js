/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */
console.log('hi')

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	var prev = head;
	var curr = prev.next;
	var next = curr.next;
	var nuhead = prev;
	
	while(next){
		curr.next = prev;
		prev = curr
		curr = next;
		next = curr.next;
	}
	curr.next = prev;
	return curr;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};