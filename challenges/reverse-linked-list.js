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
  let count = 0;
  let nextNode = head.next;

  for (let node = head; node; node = node.next) {
    count++;
    console.log(nextNode.next);
    if (!node.next) {
    	console.log('end', node.value);
    }
    
  }
  return count;
}

let newNode = new Node(1);
newNode.next = new Node(2);
newNode.next.next = new Node(3);
newNode.next.next.next = new Node(4);
newNode.next.next.next.next = new Node(5);
reverseLinkedList(newNode);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
