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
	var arr = [];
	var curr = head;
	var prev = null;
	
	while (curr !== null){
		if (arr.indexOf(curr.value) === -1){
			arr.push(curr.value);
			prev = curr;
			curr = curr.next;
		} else {
			//remove that dupe node from the linkedlist
			prev.next = curr.next;
			curr = curr.next;
		}
	}
}

module.exports = deleteDups;
