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
  let l1Length = 0;
  let l2Length = 0;
  for (let i = l1; i; i = i.next) {
    l1Length++;
  }
  for (let i = l2; i; i = i.next) {
    l2Length++;
  }
  if (l1Length > l2Length) {
    const dif = l1Length - l2Length;
    for (let i = 0; i < dif; i++) {
      const node = new Node(0);
      node.next = l2;
      l2 = node;
    }
  }
  if (l2Length > l1Length) {
    const dif = l2Length - l1Length;
    for (let i = 0; i < dif; i++) {
      const node = new Node(0);
      node.next = l1;
      l1 = node;
    }
  }
  let prev = l1;
  for (let i = l1, j = l2; i; i = i.next, j = j.next) {
    i.value += j.value;
    if (i.value >= 10) {
      i.value -= 10;
      prev.value += 1;
      if (!i.next) {
        const node = new Node(1);
        i.next = node;
        break;
      }
    }
    prev = i;
  }
  return l1;
}

// let n = new Node(2);
// let n1 = new Node(1);
// let n2 = new Node(5);
// n.next = n1;
// n1.next = n2;
// let n4 = new Node(3);

// let n = new Node(9);
// let n1 = new Node(9);
// //let n2 = new Node(9);
// n.next = n1;
// //n1.next = n2;

// let n3 = new Node(9);
// let n4 = new Node(9);
// //let n5 = new Node(9);
// n3.next = n4;
// //n4.next = n5;

 //console.log(addLinkedList(n4, n));


module.exports = { Node, addLinkedList };
