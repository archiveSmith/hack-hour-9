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
  if (!this.tail) {
    this.head = this.tail = new Node(val);
    return;
  }

  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
  	this.head.next.prev = null;
  	this.head = this.head.next;
  	return;
  }

  if (this.tail.val === val) {
  	this.tail.prev.next = null;
  	this.tail = this.tail.prev;
  	return;
  }
  
  let currNode;
  for (currNode = this.head; currNode.val !== val; currNode = currNode.next) {}

  currNode.next.prev = currNode.prev;
  currNode.prev.next = currNode.next;
};

module.exports = LinkedList;
