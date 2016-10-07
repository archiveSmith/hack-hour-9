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



function Node(val) {
	this.val = val;
	this.next = null;
}

function deleteDups(head) {
	let noDupes = [];
	let newTail;
	let newHead;
	
	let curr = head;
	
	//loop through linkedlist 
	while(curr) {
		//place values UNIQUE into an Array
		if(noDupes.indexOf(curr.val) === -1) {
			noDupes.push(curr.val)
		}
		curr = curr.next;
	}

	newHead = new Node(noDupes.shift());
	newTail = newHead;
	
	while(noDupes.length) {
		let curr = noDupes.shift();
		newTail.next = new Node(curr);
		newTail = newTail.next;
	}

	return newHead;
}

let linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(2);
linkedList.next.next.next = new Node(3);
linkedList.next.next.next.next = new Node(2);
deleteDups(linkedList);

module.exports = deleteDups;
