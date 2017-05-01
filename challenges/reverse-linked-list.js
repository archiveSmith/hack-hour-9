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
	
	function recur(prevNode, currNode) {
		if (currNode !== null) {
			let nextNode = currNode.next;
			currNode.next = prevNode;
			return recur(currNode, nextNode);
		} else {
			return prevNode;
		}
		
	}
	return recur(null, head);
}

//iterate down the linked list and set the next value to the previous value as you go. 
// every node in front needs their next value to be assigned to the previous node, then iterate to the next node (so we need access to the front node), 
// let tempHead = this.next
// tempHead.next = head
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
