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

// FIND duplicate values in nodes
// connect prev with next nodes


function deleteDups(head) {
	let current = head;
	let temporarybuffer = [];
	while(current.next !== null){
		temporarybuffer.push(current.value)
		if(temporarybuffer.indexOf(current.next.value) === -1){
			current = current.next;
		}
		else{
			current.next = current.next.next;
			current = current.next;
		}
	}
	return head;
}


module.exports = deleteDups;
