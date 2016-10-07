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


function deleteDups(head) {
  const values = [];
  let curr = head;

  while (curr) {
    values.push(curr.value);
    if (curr.next && values.indexOf(curr.next.value) !== -1) {
      curr.next = curr.next.next;
      curr = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

module.exports = deleteDups;


// function Node(value, next) {
//   this.value = value;
//   this.next = next;
// }

// let node3 = new Node(3);
// let node2 = new Node(2, node3);
// let node1 = new Node(1, node2);
// let node0 = new Node(0, node1);

// deleteDups(node0);
