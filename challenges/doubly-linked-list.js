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
  var newNode = new Node(val);
  if (this.head === null){
  	this.head = this.tail = newNode;
  } else {
  	this.tail.next = newNode;
  	newNode.prev = this.tail;
  	this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var curr = this.head;
  while (curr !== null){
    if (curr.val === val){
      //remove node
      if (curr.prev === null){      //if curr is not head
        this.head = curr.next;
        this.head.prev = null;
      } else {
        curr.prev.next = curr.next;
        if (curr.next !== null){      //if curr is not tail
          curr.next.prev = curr.prev;
        } else {
          this.tail = curr.prev;
        }
      }
      return true;
    }
    curr = curr.next;
  }
  return false;
};
module.exports = LinkedList;
