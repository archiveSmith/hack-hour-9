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
	this.value = val;
	this.next = null; 
}


function deleteDups(head) {
	let storage = [];
	let currNode = head;
	let resultNode = new Node();
	let temp = resultNode
	let index = 0;
	while(currNode) {
		storage.push(currNode.value);
		if(storage.indexOf(temp.value) === -1) {
			temp.value = storage[index];
			temp.next = new Node();
			temp = temp.next; 
			index++;
		}
		currNode = currNode.next;
	}
	return resultNode;
}

module.exports = deleteDups;
