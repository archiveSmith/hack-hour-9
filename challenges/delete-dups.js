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
  function Node(val) {
    this.value = val;
    this.next = null;
  }
  const valuesObj = {};
  const values = [];
  for (let i = head; i; i = i.next) {
    if (!valuesObj[i.value]) {
      valuesObj[i.value] = 1;
      values.push(i.value);
    }
  }
  const ll = new Node(values[0]);
  for (let i = 1, j = ll; i < values.length; i++, j = j.next) {
    j.next = new Node(values[i]);
  }
  return ll;
}

module.exports = deleteDups;
