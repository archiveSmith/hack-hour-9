/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let nodeStack = [head];

  while (head.next){
    head = head.next;
    let tempTail = new Node(head.value);
    tempTail.next = head.next;
    nodeStack.push(tempTail);
  }

  let revLL = new Node(nodeStack[nodeStack.length-1].value);
  let tempIt = revLL;

  for (let i = nodeStack.length-2; i >= 0;i--){
    tempIt.next = nodeStack[i];
    tempIt = nodeStack[i];
  }
  return revLL;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
