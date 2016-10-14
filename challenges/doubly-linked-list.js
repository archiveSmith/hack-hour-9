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

LinkedList.prototype.add = function(val) {
	let newNode = new Node(val)
	  newNode.prev = this.tail;
	  if (this.head === null){
	    this.head = newNode;
	  }
	  else{
	    this.tail.next = newNode;
	  }
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let pointer = this.head;
  while(pointer !== null) {
    if(pointer.val === val) {
    	console.log('condition hit')
      if (this.head === this.tail === pointer) {
        delete this;
    	}
      if(this.head === pointer) {
      	this.head = this.head.next;
      }
      else{
      	pointer.prev.next = pointer.next;
      }
      if(this.tail === pointer) {
      	this.tail = this.tail.prev;
      }
      else{
      	pointer.next.prev = pointer.prev;
      }
    }
    pointer = pointer.next;
  }
};

module.exports = LinkedList;
