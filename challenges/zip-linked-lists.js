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
  if (!l1 && !l2) return undefined;
   	
	var head = l1.value || l2.value;

   if (l1.value < l2.value) {
      head = l1;
      head.next = zip(l1.next, l2);
   } else {
      head = l2;
      head.next = zip(l1, l2.next);
   }
   return head;
}

var list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

var list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);


zip(list1, list2);
module.exports = {Node: Node, zip: zip};
