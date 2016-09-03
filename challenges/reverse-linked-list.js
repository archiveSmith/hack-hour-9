/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function reverseLinkedList(head) {
	let currentNode = head;
	let valuesArray = [];
	let newLL;
	let temp;
	let next;
	
	while (currentNode !== null) {
		valuesArray.push(currentNode.value);
		currentNode = currentNode.next;
	}
 
	for (let i = valuesArray.length - 1; i >= 0; i--) {
     	temp = new Node(valuesArray[i]);
     	next = new Node(valuesArray[i+1]);
     	temp.next = next;
        	if (i === 0) {
            	head = temp;
           	}
     }
     
     return temp;
     
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
