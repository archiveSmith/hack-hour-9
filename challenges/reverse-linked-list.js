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
if(!head) return undefined; 
let newAr = [];
//console.log(newAr);
let reversed = new Node();

let currentNode = head;
while(currentNode) {
	newAr.push(currentNode.value);
	currentNode = currentNode.next; 
}

let temp = reversed;
for(let i = newAr.length - 1; i >= 0; i--) {
	temp.value = newAr[i];
	temp.next = i === 0 ? null : new Node();
  temp = temp.next;
}
return reversed;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
