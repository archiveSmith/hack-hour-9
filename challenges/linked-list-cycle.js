/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true is the linked list has a cylical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {

	if (head === null){
		return false;
	}
	var curr = head;
	var temp;
	var temp2 = null;
	var a;

	while (curr.next !== null){
		temp = curr.next;
		if (temp.next === curr){
			return true;
		}
		if (temp2 !== null) {
			a = temp2.next;
			if (a !== null && a.next === temp || temp.next === temp2){
					return true;
			}
			if (a !== null){
				if (a.next === temp.next){
					return true;
				}
			}
		}
		curr.next = temp2;
		temp2 = curr;
		curr = temp;
	}
	return false;
}

module.exports = {Node: Node, hasCycle: hasCycle}

