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
	
	// result - inially undefined
	var result;
	
	// execute recursive call
	find(k, head);
	
	return result;
	
	
	// inner motor function
	function find(k, currNode) {
		var index;
		
		// base case that we are the last one, so we are 1 from the end
		if(currNode.next === null) {
			index = 1;
		} else {
			// non base case - find out how far we are from the end
			index = 1 + find(k, currNode.next);
		}

		if(index === k) { // we are here!!!
			// set result
			result = currNode.value;
		}
		
		return index;		
	}

}

// test case
/*
var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(1,a));
console.log(kthToLastNode(2,a));
console.log(kthToLastNode(3,a));
console.log(kthToLastNode(4,a));
console.log(kthToLastNode(5,a));
console.log(kthToLastNode(6,a));
console.log(kthToLastNode(0,a));
console.log(kthToLastNode(-1,a));
*/

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
