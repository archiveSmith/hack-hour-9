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
	var mHead; // points to head of merged list
	
	// if l1 and l2 both empty, return undefined
	if(l1 === null && l2 === null) {
		return mHead;
	}

	// if l1 is empty, then set m to l2
	if(l1 === null) {
		mHead = l2;
		return mHead;
	}
	
	// if l2 is empty then set m to l1
	if(l2 === null) {
		mHead = l1;
		return mHead;
	}
	
	var mPtr = mHead = l1; // start with l1
	var ptr1 = l1.next;
	var ptr2 = l2;
	
	var turn = 2; // continue with l2

	while(ptr1 !== null || ptr2 !== null) {
		
		if(turn === 1) {
			if(ptr1 !== null) {
				mPtr.next = ptr1;

				turn = 2;
				
				ptr1 = ptr1.next;
				mPtr = mPtr.next;			
			} else {
				// use l2
				mPtr.next = ptr2;
				
				turn = 2;
				
				ptr2 = ptr2.next;
				mPtr = mPtr.next;
	
			}			
		} else if(turn === 2) {
			if(ptr2 !== null) {
				mPtr.next = ptr2;

				turn = 1;
				
				ptr2 = ptr2.next;
				mPtr = mPtr.next;			
			} else {
				// use l1
				mPtr.next = ptr1;
				
				turn = 1;
				
				ptr1 = ptr1.next;
				mPtr = mPtr.next;
	
			}				
		}
	
	}
	
	return mHead;
	
};

/* test cases */
/*
var l1 = null;
var n1 = new Node(1);
n1.next = new Node(3);
l1 = n1;

var l2 = null;
var n2 = new Node(2);
n2.next = new Node(4);
n2.next.next = new Node(6);
l2 = n2;

// case 1 - expect 1,2,3,4,6
console.log('case 1');
var result = zip(l1, l2);
var currNode = result;

while(currNode !== null) {
	console.log('currNode:', currNode.value);
	currNode = currNode.next;
}

// case 2 - expect 2,4,6
console.log('case 2');

var l3 = null;


var l4 = null;
var n4 = new Node(2);
n4.next = new Node(4);
n4.next.next = new Node(6);
l4 = n4;

result = zip(l3, l4);

currNode = result;

while(currNode !== null) {
	console.log('currNode:', currNode.value);
	currNode = currNode.next;
}

// case 3 - expect 1,3
console.log('case 3');

var l5 = null;
var n5 = new Node(1);
n5.next = new Node(3);
l5 = n5;

var l6 = null;

result = zip(l5, l6);

currNode = result;

while(currNode !== null) {
	console.log('currNode:', currNode.value);
	currNode = currNode.next;
}

// case 4 - expect undefined
console.log('case 4');

var l7 = null;

var l8 = null;

result = zip(l7, l8);

console.log(result);
*/

module.exports = {Node: Node, zip: zip};
