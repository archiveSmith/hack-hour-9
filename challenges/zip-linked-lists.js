/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1 === null && l2 === null) return undefined;
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const result = new Node(l1.value);
  result.next = new Node(l2.value);

  let l1Iterator = l1.next;
  let l2Iterator = l2.next;
  let resultIterator = result.next;

  while(l1Iterator && l2Iterator) {
    resultIterator.next = new Node(l1Iterator.value);
    resultIterator.next.next = new Node(l2Iterator.value);

    l1Iterator = l1Iterator.next;
    l2Iterator = l2Iterator.next;
    resultIterator = resultIterator.next.next;
  }

  let remainingIterator = l1Iterator ? l1Iterator : l2Iterator;

  while(remainingIterator) {
    resultIterator.next = new Node(remainingIterator.value);

    remainingIterator = remainingIterator.next;
    resultIterator = resultIterator.next;
  }

  return result;
}

module.exports = {Node: Node, zip: zip};
