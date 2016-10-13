/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let tempHead = this.head;

  while (tempHead) {
    if (tempHead.value === val) {
      const prevNode = tempHead.prev;
      if (this.head === tempHead) {
        const newHead = tempHead.next;
        tempHead.next = null;
        newHead.prev = null;
      } else if (this.tail === tempHead) {
        const newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
      } else {
        prevNode.next = tempHead.next;
        tempHead.next.prev = prevNode;
      }
      return true;
    }
    tempHead = tempHead.next;
  }
  return false;
};

module.exports = LinkedList;
