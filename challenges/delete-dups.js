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



function deleteDups(head) {
	let dataStore = {};
	let curr = head;
	curr.prev = null;
	while(curr.next) {
		dataStore[curr] = true;
		if (dataStore[curr.next.value] === true) {
			console.log(dataStore)
			if (!curr.next.next) break;
			let temp = curr.next.next;
			curr.next = temp;
		}
		let temp = curr;
		curr = curr.next
		curr.prev = temp;
	}
	
	curr.next = null;
	
	while(curr.prev) {
		curr = curr.prev
	}
	return curr;
}

module.exports = deleteDups;
