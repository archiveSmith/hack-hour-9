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
//passing in 2 linked lists. 
function zip(l1, l2) {

  //set pointers, new LL, and last LL added. 
  let l1pointer;
  let l2pointer;
  let newZip;
  let last;

  //push the first 2.
  //set first item in new zip. 
  newZip = l1;
  //set pointer to next item in l1 list. 
  l1pointer = l1.next;
  //add l2 item to newzip.
  newZip.next = l2;
  //set the latest pushed item as tail.
  tail = newZip.next;
  //set l2 pointer to be the next item in the 
  l2pointer = tail.next;


  const l1Supp = function () {
   tail.next = l1pointer;
   tail = l1pointer;
   l1pointer = tail.next;
  }

  const l2Supp = function () {
    tail.next = l2pointer;
   tail = l2pointer;
   l1pointer = tail.next;
  }

  // while (tail.next !== null) {
  //   l1Supp();
  //   l2Supp();
  // }

     l1Supp();
         console.log(tail);

    l2Supp();
    
    console.log(tail);
     l1Supp();
         console.log(tail);

    l2Supp();
    
    console.log(tail);
     l1Supp();
         console.log(tail);

    l2Supp();
    
    console.log(tail);
     l1Supp();
         console.log(tail);

    l2Supp();
    
    console.log(tail);
     l1Supp();
         console.log(tail);

    l2Supp();
    
    console.log(tail);


// console.log(newZip)
// console.log(l1.next);
// console.log(l2.next);
  // console.log(l1pointer);
  //   console.log(l2pointer);
// console.log(l1);
// console.log(l2);

  return newZip
};

module.exports = { Node: Node, zip: zip };
