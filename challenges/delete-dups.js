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
  const outLL = new Node(head.value);
  let runner = outLL;
  head = head.next;

  while (head) {
    if (vals.indexOf(head.value) === -1) {
      vals.push(head.value)
    }
    head = head.next;
  }

  while (vals.length > 0) {
    const tempNode = new Node(vals.shift());
    runner.next = tempNode;
    runner = runner.next;
  }

  return outLL;
}

module.exports = deleteDups;
