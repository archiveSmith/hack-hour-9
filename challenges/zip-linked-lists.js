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
  
  var current = l1; //current is full l1
  var head = l2;    //head is full l2
  var nextHead = l1.next; //next head is l1.next
 
  //head constructor 
  
  while(current.next) {
    current.next = head;    // head.next = l2node
    head = head.next;       // move l2node to next In List
    current = current.next;   // current is old l2node
    current.next = nextHead;  // link old l2 node to next l1node in list  
    nextHead = nextHead.next; // 
    current = current.next;
  }
  current.next = head
};


module.exports = {Node: Node, zip: zip};
