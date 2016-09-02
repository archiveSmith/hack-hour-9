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
if(l1 && l2) return undefined; 
if (l1 === undefined) return list2;
if (l2 === undefined) return list1;

let main = l1; 
let temp = l1;
l1 = l1.next 
  while(l1 !== null && l2 !== null) {
	  temp.next = l2;
	  l2 = l2.next; 
	  temp = temp.next;

	 temp.next = l1;
	 l1 = l1.next;
	 temp = temp.next
  }  
if (l1 === null) { temp.next = l2; }
if (l2 === null) { temp.next = l1; }

return main;
};

module.exports = {Node: Node, zip: zip};
