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
	if (!l1) return l2;
	if (!l2) return l1;
	
	let l3;
	let tail;
	while (l1 && l2) {
		if (!tail) {
			l3 = new Node(l1.value);
			l3.next = new Node(l2.value);
			l1 = l1.next;
			l2 = l2.next;
			tail = l3.next;
		} else {
			tail.next = new Node(l1.value);
			tail.next.next = new Node(l2.value);
			l1 = l1.next;
			l2 = l2.next;
			tail = tail.next.next;
		}
	}
	
	if (l2) {
		tail.next = l2;
	} else if (l1) {
		tail.next = l1;
	}
	return l3;
};

module.exports = {Node: Node, zip: zip};
