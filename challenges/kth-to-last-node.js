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
  this.position = null;
}

function kthToLastNode(k, head) {
	var current = head;
	current.position = 0;
	var counter = 1;
	while (current.next !== null){
		counter++;
		var prevposition = current.position;
		current.position = prevposition + 1;
		current = current.next;

	}
	var target = counter - (k - 1);			//targetth node
	current = head;
	counter = 1;
	while (current.next !== null) {
		if (counter === target) {
			return current.value;
		}
		counter++;
		var prevposition = current.position;
		current.position = prevposition + 1;
		current = current.next;
	}
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
