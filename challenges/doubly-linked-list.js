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
  let node = new Node(val);
   if(!this.head) {
   	this.head = node;
   	this.tail = node;
   } else {
   	this.tail.next = node;
   	node.prev = this.tail;
   	this.tail = node; 
   }
   this.length++;
   return node; 
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;
