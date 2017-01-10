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
  const vals = {};
  let current = head;
  let prev;

  while (current) {
    if (vals[current.value]) {
      prev.next = current.next;
    } else {
      vals[current.value] = true;
      prev = current;
    }
    current = current.next;
  }
}

module.exports = deleteDups;
