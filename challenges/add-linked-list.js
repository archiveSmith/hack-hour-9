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
  let total = loopLL(l1) + loopLL(l2);
  return createLL(total);
}

let loopLL = (liLi) => {
  let pointer = liLi;
  let arr = [];
  while (pointer !== null) {
    arr.push(pointer.value)
    pointer = pointer.next;
  };
  output = parseInt(arr.reverse().join(''));
  return output;
};

let createLL = (int) => {
  let arr = int.toString().split('').reverse();
  let last;
  let output;
  arr.forEach((element, index, array) => {
    let n = new Node(element);
    if (last == undefined) {
      last = n;
      output = last;
    } else {
      last.next = n;
      last = n;
    };
  });
  return output;
};

// let node1 = new Node(1);
// let node2 = node1.next = new Node(2);
// let node3 = node2.next = new Node(3);
// let node4 = new Node(4);
// let node5 = node4.next = new Node(5);
// let node6 = node5.next = new Node(6);

// console.log('t',addLinkedList(node1, node4));
// console.log(node1);
// console.log(node4);

module.exports = { Node: Node, addLinkedList: addLinkedList };