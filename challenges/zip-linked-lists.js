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
   let outList = l1;
   let tempLL = l1;
   l1 = l1.next

   while (l1 !== null && l2 !== null){
   	tempLL.next = l2;
   	tempLL = l2;
   	l2 = l2.next;

   	tempLL.next = l1;
   	tempLL = l1;
   	l1 = l1.next;
   }

   if (l1 !== null){
     tempLL.next = l1;
   } else {
     tempLL.next = l2;
   }

   return outList;
 };



module.exports = {Node: Node, zip: zip};
