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
	let store = {};
	let current = head;

	//using a pointer for the current node, iterate thru the linked list and check if the next node value already exists. if it doesnt, then set point as the next node and keep chekcing. if it does, then we want to update the next value of our current node and loop again in this node
	while (current) {
		store[current.value] = true;

		if (current.next && store[current.next.value]) {
			//set next node to the one after if it exists
			current.next = current.next.next || null;
		} else {
			current = current.next;
		}
	}
}


module.exports = deleteDups;
