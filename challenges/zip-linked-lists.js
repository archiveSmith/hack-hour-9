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
  
  //temp = l1.value

  //First time
  var l1HeadCopy = newNode(l1.val);
  var l2HeadCopy = newNode(l2.val);
  l1HeadCopy.next = l2HeadCopy;
  l2HeadCopy.next = l1.next;

  while (l1Copy = l1.next, l2Copy = l2.next; i ; l1Copy = l1Copy.next, l2Copy = l2Copy.next)
  l1HeadCopy.next = l2Copy;
  l2Copy.next = 
  

  l2HeadCopy.next = l1Copy; //l2.head.next = l1.next
  l1Copy.next = l2Copy;   //l1.next.next = l2.next
  
  




  // (for i=l1.next; i;  )
  // var l1Copy = l1.next;
  // var l2Copy = l2.next;
  // l1HeadCopy.next = new Node(l2NodeCopy);
  // l2HeadCopy.next = l1Copy;
  // l1Copy.next = l2Copy;



  var l1Copy = l1.next;
  var l2Copy = l2.next;
  l1NodeCopy.next = new Node(l2NodeCopy);

  l2NodeCopy.next = new Node(l1.next);
  
  

  
  
  
  l2
};

module.exports = {Node: Node, zip: zip};
