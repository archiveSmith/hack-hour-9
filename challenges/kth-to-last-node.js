/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	var nextNode = head.next;
	var counter = 0;
	if(!nextNode){
		console.log("nothing in this list");
	}
	else {
		
		for(; nextNode.next; nextNode = nextNode.next){
			counter ++;
		}
	}
	var nodeToReturn = counter + 3 - k;
	var nodeNum = 2;
	var returnNode = head.next;
	for(; nodeNum < nodeToReturn; returnNode = returnNode.next){
		nodeNum ++;
	}
	return returnNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
