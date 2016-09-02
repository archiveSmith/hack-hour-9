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
	if(l1 = null) return l2;
	if(l2 = null) return l1;

	let l3 = new Node(l1)
	let marker = false;

	while(l1 && l2) {
		if(!marker) {
			l3.next = l2;
			l3 = l3.next;
			marker = true;
		} else {
			l3.next = l1
			l3 = l3.next
			marker = false;
		}
	}
	
	if(!l1) l3.next = l2;
	if(!l2) l3.next = l1;
	
	
	return l3;
};

module.exports = {Node: Node, zip: zip};
