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
  //if head and tail already exist, just update the tail
  if (this.tail)
  	let newNode = new Node(val);
  	this.tail.next = newNode;
  	newNode.prev = this.tail;
  	let oldTail = this.tail;
  	this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = { LinkedList, Node };
