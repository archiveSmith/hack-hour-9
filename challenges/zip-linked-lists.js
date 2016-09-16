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
  if(!l1 || !l2){return undefined} 
  let l3 = new Node(l1.value);
  let counter = 0;
  // while(l1.next || l2.next){
  //   //if lists are uneven and l1.next is null, inc count to avoid adding l1 to l3.
  //   if (!l1.next && counter%2!==0) {
  //       ++counter;
  //     }
  //   if (counter%2!==0){
  //     l3.val = l1.value;
  //     l3.next = l2;
  //     l1 = l1.next;
  //     ++counter;
  //     //if lists are uneven and l1.next is null, inc count to avoid adding l1 to l3.
  //   } else if (!l2.next && counter%2===0) {
  //       ++counter; 
  //       //l3.val gets current l2.val
  //       //l3.next gets l1
  //       //l2.head gets reassigned to l2.next
  //       //inc counter to check l1 next time
  //     } else {
  //     l3.val = l2.value;
  //     l3.next = l1;
  //     l2 = l2.next;
  //     ++counter;
  //   }
  // }
  // return l3;
};

module.exports = {Node: Node, zip: zip};
