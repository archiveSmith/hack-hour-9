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
	let counter = 0;
	let zipped = new Node(l1.value);
	let head = zipped;

	function recur(list1, list2) {
		let list1 = l1;
		let list2 = l2;

		if (l1.next === null && l2.next === null) {
			return zipped;
		}
		if (l1.next === null) {
			zipped = l2;
		} else if (l2.next === null){
			zipped = l1;
		}
		if (counter%0 === 0) {
			zipped.next = l2;
			zipped.next.value = l2.value;
			counter++;
			recur(list1 = list1.next);
		} else {

			counter++;
		}
	}


};



module.exports = {Node: Node, zip: zip};
