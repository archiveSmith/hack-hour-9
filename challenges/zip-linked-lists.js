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
	// set currentZip with l1 head vaule
	// set current l1 position as l1.next
	// set current l2 position as l2.value
	let currentZip = new Node(l1.value);
	let currentL1 = l1.next;
	let currentL2 = l2.value;
	
	// instantiate counter
	let counter = 1;
	
	// while l1 and l2 have next
	while(currentL1.next && currentL2.next) {
		// if counter is even, get current node in l1 
		if(counter % 2 === 0) {
			currentZip.next = currentL1.value;
			// move l1 current to current.next
			currentL1 = currentL1.next;
		}else {
		// else get current node in l2
			currentZip.next = currentL2.value;
			// move l2 current to current.next
			currentL2 = currentL2.next;
		}
		// move to next position
		currentZip = currentZip.next;
		// increment counter
		counter++
	}
	
	if(currentL1.value){
		
	}

		
	// check each list for remaining value
	
	while(l1)
	
};

module.exports = {Node: Node, zip: zip};
