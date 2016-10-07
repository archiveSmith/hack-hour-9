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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let current = node1;
  let arr = [];
  let mem = {};
  while (current !== null) {
    if (!mem[current.value]) {
      mem[current.value] = true;
      arr.push(current);
    };
    current = current.next;
  };
  arr.forEach((e, i, a) => {
    e.next = null;
  });
  arr.forEach((e, i, a) => {
    if (arr[i + 1]) { e.next = arr[i + 1] };
  });
  return arr[0]
}

var node1 = new Node('1');
var node2 = node1.next = new Node('3');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('3');
var node5 = node4.next = new Node('3');

console.log(deleteDups(node1));

module.exports = deleteDups;