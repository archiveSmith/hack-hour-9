/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val, next = null) {
  this.value = val;
  this.next = next;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let c1 = l1;
  let c2 = l2;
  let p1;
  let p2;
  while (c1 && c2) {
    p1 = c1.next;
    p2 = c2.next;
    c1.next = c2;
    if (p1) {
      c2.next = p1;
      c2 = p2;
    }
    c1 = p1;
  }

  return l1;
}

module.exports = { Node, zip };

// let nodeA3 = new Node('A3', null);
// let nodeA2 = new Node('A2', nodeA3);
// let nodeA1 = new Node('A1', nodeA2);

// let nodeB3 = new Node('B3', null);
// let nodeB2 = new Node('B2', nodeB3);
// let nodeB1 = new Node('B1', nodeB2);

// let zipped = zip(nodeA1, nodeB1);
// console.log(zipped);
