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
//another approach:
	//change l1 & l2 to number format
	//add l1 & l2
	//build the linked list for the sum of l1 & l2
//the approach below:
	//different length lists? negative numbers? both empty lists?
	//check if heads of l1 & l2 exist
		//if both exist, add the values of the current nodes & temp (if exists)
			//if the value is >= 10, take the ones digit and make that the node and put the extra in a temp
			//on the next nodes, add the temp to it & reset temp to 0
		//if one current node exists, add that to temp and place that numbers
	//repeat while this.next !== null for at least 1 list; stop when this.next = null for both lists
	if (!l2) {
		return l1;
	}
	if (!l1 && !l2) {
		return undefined;
	}
	
	var curr1 = l1, curr2 = l2, ones, last;
	if (curr1.value !== null || curr2.value !== null) {
		if (curr1.value !== null && curr2.value !== null){
			if (l3 === null || l3 === undefined) {
				if (curr1.value + curr2.value < 10) {
					var l3 = new Node(curr1.value + curr2.value);
					curr1 = l1.next;
					curr2 = l2.next;
					last = l3;
					console.log('l3', l3);
				} else {
					var splitted = (curr1.value + curr2.value).toString().split('');
					// console.log('sum', sum);
					// ones = splitted[1];
					// console.log('ones',ones);
					var l3 = new Node(splitted[1]);
					last = l3;
					var temp = 1;
				}
			} else {
				last.next = new Node(curr1.value + curr2.value);
				last = last.next;
				console.log('last', last);
			}
		}
	}
	
}
var three = new Node(5);
var one = new Node(1);
var five = new Node(5);
three.next = one;
one.next = five;
// console.log('l1', l1);

var Five = new Node(5);
var Nine = new Node(9);
var Two = new Node(2);
Five.next = Nine;
Nine.next = Two;
// console.log('l2', Five);

addLinkedList(three, Five);

module.exports = {Node: Node, addLinkedList: addLinkedList};
