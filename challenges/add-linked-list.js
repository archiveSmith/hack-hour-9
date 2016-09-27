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
  let l1Arr = [l1.value];
  let l2Arr = [l2.value];
  while (l1.next != null) {
// get the values into an array instead.
    l1Arr.push(l1.next.value);
    l1.next = l1.next.next;
  }
  while (l2.next != null) {
    // get the values into an array instead.
    l2Arr.push(l2.next.value);
    l2.next = l2.next.next;
  }
  const l1Num = Number(l1Arr.reverse().join(''));
  const l2Num = Number(l2Arr.reverse().join(''));
  const l1l2Sum = l1Num + l2Num;
  const l1l2SumStr = l1l2Sum.toString();
  const len = l1l2SumStr.length;
  const output = new Node();
  for (let i = 0, ss = l1l2SumStr, pointer = output; i < len; i++) {
    pointer.value = Number(ss.charAt(len - 1 - i));
    if (i < len - 1) {
      pointer.next = new Node();
      pointer = pointer.next;
    }
  }
  return output;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
