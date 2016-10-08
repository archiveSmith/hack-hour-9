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
	while(currNode) {
		if(storage.indexOf(currNode.value) === -1) {
			storage.push(currNode.value);
		}
		currNode = currNode.next;
	}
	let resultLL = new Node();
	let temp = resultLL;
	for(let i = 0; i < storage.length; i++) {
		temp.value = storage[i];
		temp.next = i === storage.length - 1 ? null : new Node();
		temp = temp.next;
	}
	return resultLL;
}


module.exports = deleteDups;
