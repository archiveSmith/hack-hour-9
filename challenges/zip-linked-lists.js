/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function zip(l1, l2) {
	
// 	if (!l1) return l2;
//   if (!l2) return l1;
//   if (!l1 && !l2) return undefined;
   	
// 	var head = l1.value || l2.value;

//    if (l1.value < l2.value) {
//       head = l1;
//       head.next = zip(l1.next, l2);
//    } else {
//       head = l2;
//       head.next = zip(l1, l2.next);
//    }
//    return head;
// }

// var list1 = new Node(1);
// list1.next = new Node(3);
// list1.next.next = new Node(5);

// var list2 = new Node(2);
// list2.next = new Node(4);
// list2.next.next = new Node(6);


// zip(list1, list2);

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	let l1Copy = l1;
	let l2Copy = l2;
	let tail = l1;
	let pointer = "l2";
	
	if(!l1) return l2;
	if(!l2) return l1;
	
	while(l1Copy && l2Copy) {
		if(pointer === "l2") {
			if(!l1Copy.next) break;
			l1Copy = l1Copy.next;
			tail.next = tail = l2Copy;
			pointer = "l1";
		} else {
			if(!l2Copy.next) break;
			l2Copy = l2Copy.next;
			tail.next = tail = l1Copy;
			pointer = "l2";
		}
	}
	
	if(!l1Copy.next) {
		tail.next = l2Copy;
	} else {
		tail.next = l1Copy;
	}
	
	return l1;
	
}

let ll1 = new Node(5);
ll1.next = new Node(3);
ll1.next.next = new Node(6);

let ll2 = new Node(7);
ll2.next = new Node(1);
ll2.next.next = new Node(2);
// ll2.next.next.next = new Node(9);

zip(ll1, ll2)

module.exports = {Node: Node, zip: zip};
