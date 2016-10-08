/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function removeNode(prev, curr) {
//   prev.next = curr.next;
//   curr.next = null;
// }

// function deleteDups(head) {
//   const store = {};
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     if (!store[curr.value]) {
//       store[curr.value] = true;
//       prev = curr;
//       curr = curr.next;
//     } else {
//       prev.next = curr.next;
//       curr.next = null;
//       curr = prev.next;
//     }
//   }
//   return head;
// }

function deleteDups(head) {
  const store = {};
  let prev;
  for (let curr = head; curr; curr = curr.next) {
    if (curr.value in store) {
      prev.next = curr.next;
    } else {
      store[curr.value] = true;
      prev = curr;
    }
  }
}

// test data
// const node1 = new Node('3');
// const node2 = node1.next = new Node('2');
// const node3 = node2.next = new Node('3');
// // const node4 = node3.next = new Node('3');
// // const node5 = node4.next = new Node('3');
// console.log(node1);
// deleteDups(node1);
// console.log(node1);

module.exports = deleteDups;
