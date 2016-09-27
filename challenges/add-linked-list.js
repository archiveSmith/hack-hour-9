/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  if (l1.value === 0) {
    return l2;
  } else if (l2.value === 0) {
    return l1;
  }
  let output;
  let outNext;
  let remain = 0;
  for (let i = l1, j = l2; i || j || remain > 0; i = i.next || 0, j = j.next || 0) {
    let value;
    if (i && j) {
      value = i.value + j.value + remain;
    } else if (!i && !j) {
      value = remain;
    } else if (!j) {
      value = i.value + remain;
    } else {
      value = j.value + remain;
    }
    remain = 0;
    if (value >= 10) {
      value -= 10;
      remain = 1;
    }
    if (!output) {
      output = new Node(value);
      outNext = output;
    } else {
      outNext.next = new Node(value);
      outNext = outNext.next;
    }
  }
  return output;
}

// test data
// let l1 = new Node(6);
// l1.next = new Node(1);
// l1.next.next = new Node(8);

// let l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);

addLinkedList(l1, l2);

module.exports = { Node: Node, addLinkedList: addLinkedList };
