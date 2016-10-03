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
 * const node1 = new Node('1');
 * const node2 = node1.next = new Node('2');
 * const node3 = node2.next = new Node('3');
 * const node4 = node3.next = new Node('4');
 * const node5 = node4.next = new Node('5');
 */

const Node = function (value) {
  this.value = value;
  this.next = null;
};

function hasCycle(head) {
  try {
    JSON.stringify(head);
  } catch (err) {
    if (err.toString().search('circular') > 0) {
      return true;
    }
    return err;
  }
  return false;
}

// test data
// const node1 = new Node('1');
// const node2 = node1.next = new Node('2');
// const node3 = node2.next = new Node('3');
// const node4 = node3.next = new Node('4');
// const node5 = node4.next = new Node('5');
// hasCycle(node1); // => false
// // node5.next = node2;
// hasCycle(node1); // => true

module.exports = { Node: Node, hasCycle: hasCycle };
