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
	let length = 0;
	for (let i = head; i; i = i.next) {
		length++;
	}
	for (let i = 0, tempHead = head; i < length && tempHead; i++) {
		if (i === length-k) {
			return tempHead.value;
		}
		tempHead = tempHead.next
	}
	return undefined;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
