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
	if(!l1 || !l2){
		return undefined;
	}

	let nextNode = l2;
	for(let i = l1; i; i = i.next.next){
		let nextI = i.next;
		i.next = nextNode;
		nextNode = nextNode.next;
		i.next.next = nextI;
	}
	return l1;
};


// testing code
// l1 = new Node('l10');
// l2 = new Node('l20');

// for(let x=1, l=l1, y=l2; x<6; x++, l=l.next, y=y.next){
// 	l.next = new Node('l1'+x);
// 	y.next = new Node('l2'+x);
// }

// let arr = [];
// for(let i = l1; i.next; i = i.next){
// 		arr.push(i);
// 	}

// 	console.log('arr',arr)

// console.log('l1',l1);
// console.log('l2',l2);

// zip(l1,l2);

module.exports = {Node: Node, zip: zip};