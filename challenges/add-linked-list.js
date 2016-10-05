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
let ll1 = [],
    ll2 = [], 
    ll1Curr = l1, 
    ll2Curr = l2, 
    ll3;

while(ll1Curr){
  ll1.push(ll1Curr.value);
  ll1Curr = ll1Curr.next;
}
while(ll2Curr){
  ll2.push(ll2Curr.value);
  ll2Curr = ll2Curr.next;
}
ll3 = (parseInt(ll1.reverse().join('')) + parseInt(ll2.reverse().join(''))).toString();
let ll3Arr = ll3.split('');
let head = new Node(ll3Arr.shift()), tempTail = head;
for (let digit of ll3Arr){
	let temp = new Node(parseInt(digit));
	tempTail.next = temp;
	tempTail = tempTail.next;
	
}
return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
