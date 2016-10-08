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
  if (!head) return head;
  let cur = head;
  const hist = {}
  
  while (cur) {
    hist[cur.value] = cur.value;
    while (cur.next && hist[cur.next.value]) {
      if (cur.next && hist[cur.next.value]) {
        cur.next = cur.next.next;
      }
    }  
    cur = cur.next;
  }
  return head;
}

module.exports = deleteDups;
