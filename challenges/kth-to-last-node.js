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

// Return undefined if k is not a number
// Return undefined if k is not an integer
// Return undefined if k is not positive
// Return undefined if the list is shorter than length k

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (typeof k !== 'number' ||
      !Number.isInteger(k)  ||
      k < 1) {
    return undefined;
  }

  var follower = null;
  let count = 0;
  for (let currentNode = head; currentNode; currentNode = currentNode.next) {
    if (count === k - 1) {
      follower = head;
      console.log("Follower: " + follower.value);
    } else {
      count++;
    }

    console.log("Leader " + currentNode.value);
    console.log("Follower " + follower.value);

    if (follower !== null) {
      follower = follower.next;
    }
  }

  if (follower !== null) {
    return follower.value;
  } else {
    return undefined;
  }


}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
