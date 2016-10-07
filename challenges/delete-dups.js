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
  let buffer = [];
  while (head) {
    if (!buffer.includes(head.value)) buffer.push(head.value);
    head = head.next
  }
  return buffer
}

module.exports = deleteDups;
