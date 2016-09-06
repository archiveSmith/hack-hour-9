/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *shfs
 */

function Node(value) { 
    this.value = value;
    this.next = null; 
}

function reverseLinkedList(head) {
    if (head){
      if (head.next === null){
        return head;
      }
      let pointer = head.next;
      pointer.next2 = head;
      while (pointer.next != null) {
  	// pointer finds the tail (if it's 1 item list return head). No next2 prop on head.
       // while crawling list, puts a 'next2/back' prop?
          pointer.next.next2 = pointer;
          pointer = pointer.next;
      }
  	let tail = pointer;
    	
  	while (pointer != head) {
      //come back up the other way
        	pointer.next = pointer.next2;
       	delete pointer.next2;
      	pointer = pointer.next;
          }  
      return tail;
      }
    }
    else{
      return null;
    }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
