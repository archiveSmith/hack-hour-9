/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

	if (!l1 && !l2) {
		return undefined;
	}
	if (l1 && !l2) {
		return l1;
	}
	if (!l1 && l2) {
		return l2;
	}
	

	let k = l1;
	let last = l1;
	let temp2 = l2;
	let temp1 = last.next;

	let turn = 1;	//this flags whose turn it is next

	while (temp1 !== null || temp2 !== null) {
		if (turn === 1 && temp2 !== null) {
			last.next = temp2;
			last = temp2;
			temp2 = last.next;
			turn = 2;

		} else if (turn === 2 && temp1 !== null) {
			last.next = temp1;
			last = temp1;
			temp1 = last.next;
			turn = 1;
		}

	}

	return l1;
	


};
module.exports = {Node: Node, zip: zip};
