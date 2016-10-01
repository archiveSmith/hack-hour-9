/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	//new list
	let newList;
	
	let curr1 = l1;
	let curr2 = l2;
	let curr3;
	let carryOver = 0;
	
	while(curr1 || curr2) {
		let tempSum = 0;
		if(curr1) {
			tempSum += curr1.value;
			curr1 = curr1.next;
		}
		
		if(curr2) {
			tempSum += curr2.value;
			curr2 = curr2.next;
		}
		tempSum += carryOver;
		if(tempSum > 9) {
		    carryOver = 1;
			tempSum = tempSum-10;
		} else {
		    carryOver = 0;
		}
		
		if(!newList) {
			newList = new Node(tempSum);
			curr3 = newList;
		} else {
			curr3.next = new Node(tempSum);
			curr3 = curr3.next;
		}
	}
	if(carryOver) {
        curr3.next = new Node(carryOver);
	}
	return newList;
}

var link1 = new Node(9);
link1.next = new Node(9);
link1.next.next = new Node(9);
//console.log(link1)

var link2 = new Node(9);
link2.next = new Node(9);
// link2.next.next = new Node(9);
//console.log(link2)

addLinkedList(link1, link2)

module.exports = {Node: Node, addLinkedList: addLinkedList};
