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
  if (!l1 || !l2) return l1 || l2;
  function listToNum(l) {
    let numStr = ""
    for (let node = l; node; node = node.next) {
      numStr += node.value.toString();
    }
    return Number(numStr);
  }

  function numToList(n) {
    nodeArr = n.toString().split("").reverse().map(n => {
      return new Node(n);
    })
    let head = nodeArr[0];
    let curr = head;
    for (let i = 1; i < nodeArr.length; i++) {
      curr.next = nodeArr[i];
      curr = curr.next;
    }
    return head;
  }
	return numToList(listToNum(l1) + listToNum(l2))
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
