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

//passing in 2 linked lists. 
function zip(l1, l2) {
  //declare L1Current and L2Current vars. 
  //set zippedLL to be L1Current.
  //update L1Current to be next in line. 
  //set zippLL next to be L2Current.
  //update L2Current to be next in line. 
  let currL1 = l1;
  let currL2 = l2;
  let latestZipped;
  let zipped = l1;
  
  //while 
  while (currL1 !== null ) {
    
  } 

  while (currL2 !== null ) {
    
  } 

  
  
  currL1 = zipped.next;
  zipped.next = currL2;
  currL2 = zipped.next;

  


};

module.exports = { Node: Node, zip: zip };
