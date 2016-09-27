/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let l1Str = '';
  let l2Str = '';
  for (let i = l1; i; i = i.next) {
    l1Str += i.value;
  }
  for (let i = l2; i; i = i.next) {
    l2Str += i.value;
  }
  l1Str = l1Str.split('').reverse().join('');
  l2Str = l2Str.split('').reverse().join('');
  let num = Number(l1Str) + Number(l2Str);
  num = num.toString().split('');
  const ll = new Node(+num[0]);
  for (let i = 1, j = ll; i < num.length; i++, j = j.next) {
    const node = new Node(+num[i]);
    j.next = node;
  }
  return ll;
}


module.exports = { Node, addLinkedList };
