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
  if (!head) return null;

  const cache = {};
  cache[head.value] = true;

  for (let it = head; it && it.next; it = it.next) {
    if (cache[it.next.value]) {
      it.next = it.next.next;
    }
    else {
      cache[it.next.value] = true;
    }
  }

  return head;
}

module.exports = deleteDups;
