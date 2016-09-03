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
	var nodeArray = []
	
	for(var i = head; i; i = i.next){
		nodeArray.push(i.value);
	}
	console.log(nodeArray)
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
