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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {

  var current1 = l1;
  var current2 = l2;
  var result;
  var summer;
  var digitSum = current1.value + current2.value;
  var carry = 0;

  if (digitSum >= 10) {
    carry = 1;
    digitSum -= 10;
  }

  summer = new Node(digitSum);
  result = summer

  current1 = current1.next;
  current2 = current2.next;

  while (current1 && current2) {
    digitSum = current.value + current2.value + carry;

    if (digitSum >= 10) {
      carry = 1;
      digitSum -= 10;
    } else {
      carry = 0;
    }

    summer.next = new Node(digitSum);

    summer = summer.next;
    current1 = current1.next;
    current2 = current2.next;
  }


  return result;
}

}
module.exports = { Node: Node, addLinkedList: addLinkedList };
