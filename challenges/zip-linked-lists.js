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
  if (arguments.length === 0 || arguments.length > 2) {
    return undefined;
  } else if (arguments.length === 1) {
    return l1;
  }
  let nextNode = l2;
  for (let i = l1; i; i = i.next.next) {
    if (nextNode === null) {
      break;
    }
    let nextI = i.next;
    i.next = nextNode;
    nextNode = nextNode.next;
    i.next.next = nextI;
    if (i.next.next === null && nextNode !== null) {
      i.next.next = nextNode;
      break;
    }
  }
  return l1;
}


// testing code
const l1 = new Node('l10');
const l2 = new Node('l20');
l1.next = new Node('l1extra');

for (let x = 1, l = l1.next, y = l2; x < 6; x++, l = l.next, y = y.next) {
  l.next = new Node('l1' + x);
  y.next = new Node('l2' + x);
}

// console.log('l1',l1);
// console.log('l2',l2);

// l1 = new Node(1);
// l1.next = new Node(4);
// l1.next.next = new Node(6);

// l2 = new Node(2);


console.log(zip(l1, l2));

module.exports = { Node: Node, zip: zip };