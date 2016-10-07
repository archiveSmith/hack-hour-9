/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
	this.value = value;
	this.next = null;
}

function deleteDups(head) {
	var buffer = {};
	
	var prev = null;
	var curr = head;
	
	// create object to remember what has been seen and the count of times seen - iterate list once to populate this object
	while(curr !== null) {
		if(buffer[curr.value]) { // already exists
			buffer[curr.value] = buffer[curr.value] + 1; // increment count
		} else { // new
			buffer[curr.value] = 1; // set count to 1
		}
		
		curr = curr.next;
	}
	
	// iterate through the list again, keeping 2 ptrs of prev and curr
		// for the curr value, lookup the count of from the object, if greater than 1, remove this node and decrement count for this value
	curr = head;
	
	while(curr !== null) {
		if(buffer[curr.value] > 1) { // need to remove this node
			if(prev === null) { // removing from head of list
				head = curr.next;
			} else { // not removing from head of list
				prev.next = curr.next;
			}
			
			buffer[curr.value] = buffer[curr.value] - 1; // decrement count
		} else { // move prev ptr along
			prev = curr;
		}
		
		// move curr ptr along
		curr = curr.next;
	}
	
	return head;
}

/* tests */
/*
var n1 = new Node(1);
var n2 = new Node(2);
var n3 = new Node(3);
var n4 = new Node(3);
n1.next = n2;
n2.next = n3;
n3.next = n4;
console.log(n1);
console.log(deleteDups(n1));

var n0 = new Node(2);
n0.next = n1;
console.log(n0);
console.log(deleteDups(n0));
*/

module.exports = deleteDups;
