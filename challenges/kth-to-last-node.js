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
  
function llLength(head){
	let len = 0;
	let currHead = head;
	while(currHead !== null){
		len++;
		currHead = currHead.next;
	}
	return len;
}

function kthToLastNode(k, head) {
	if (head === null || k < 1){
		return false;
	}
	let len = llLength(head);
	if (k === len){
		return head.value;
	}
	let currHead = head;
	while(currHead !== null){
		len--;
		currHead = currHead.next;
		if(len === k){
			return currHead.value;
		}
	}
}
//console.log(kthToLastNode(2,a)); --> 'D'

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
