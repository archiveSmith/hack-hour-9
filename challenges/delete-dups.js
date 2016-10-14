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
	let nums = {};
	let curr = head;
	let prev;

	while(curr) {
		if(nums[curr.value]) {
			prev.next = curr.next
		} else {
			num[curr.value] = true;
			prev = curr
		}
		curr = curr.next
	}

}

module.exports = deleteDups;
