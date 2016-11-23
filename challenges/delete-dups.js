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
  const vals = [];
  let tempHead = head;
  while (tempHead) {
    if (vals.indexOf(tempHead.next.value) < 0) {
      vals.push(tempHead.next.value);
      tempHead = tempHead.next.next;
    } else {
      tempHead = tempHead.next;
    }
  }
  return head;
}

module.exports = deleteDups;
