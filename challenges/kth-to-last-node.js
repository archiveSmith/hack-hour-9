/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
let len = 1;
let difference;
let currentNode = head;

//Check to see if head exists else return false
//Grab the length by looping through the list
//Grab the difference from the length to k 
//loop through from the head to the difference
//return the value that distance from head

if(head === null || k < 1){
	return null; 
}

while(currentNode.next) {
	currentNode = currentNode.next;
	len += 1;
}

	difference = len - k; 
	currentNode = head;
	
	for(i = 0; i < difference; i++) {
		currentNode = currentNode.next;
	}
    
    return currentNode.value;


}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
