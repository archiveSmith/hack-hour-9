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
	//temp sum
	let tempSum;
	//new list
	let newList;
	
	//set curr1 to head of l1
	//set curr to head of l2
	
	//while both l1 next and l2 next is not null
		//add l1 and l2 curr vals
			//check if the sum is a two digit number
				//if it is, change val to 0, add the carry over to the curr.next's value
				//set new list node to the sum
		//change curr1 to curr1.next
		//change curr1 to curr2.next
	
	//add remaining from l1	
	//add remaining from l2
	
	//return out the new list
	let curr1 = l1;
	let curr2 = l2;
	let curr3;
	
	while(curr1 && curr2) {
		tempSum = curr1.value + curr2.value;
		if(tempSum > 9) {
			curr1.next.value += 1;
			tempSum = tempSum-10;
		}
		
		if(!newList) {
			newList = new Node(tempSum);
			curr3 = newList;
		} else {
			curr3.next = new Node(tempSum);
			curr3 = curr3.next;
		}
		
		curr1 = curr1.next;
		curr2 = curr2.next;
	}
	return newList;
}

var link1 = new Node(5);
link1.next = new Node(1);
link1.next.next = new Node(5);
console.log(link1)

var link2 = new Node(5);
link2.next = new Node(9);
link2.next.next = new Node(2);
console.log(link2)

addLinkedList(link1, link2)

var link1 = new Node(3);
link1.next = new Node(1);
link1.next.next = new Node(5);
console.log(link1)

var link2 = new Node(5);
link2.next = new Node(9);
link2.next.next = new Node(2);
console.log(link2)

module.exports = {Node: Node, addLinkedList: addLinkedList};
