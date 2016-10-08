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


function deleteDups(head) {
  const vals = [];
  let newHead = head;
  let outLL = new Node(newHead.value);
  const runner = outLL;

  while (newHead) {
    if (vals.indexOf(newHead.value) === -1) {
      vals.push(newHead.value);
    }
    newHead = newHead.next;
  }

  while (vals.length > 0) {
    const tempNode = new Node(vals.shift());
    outLL.next = tempNode;
    outLL = outLL.next;
  }

  return runner;
}

module.exports = deleteDups;
