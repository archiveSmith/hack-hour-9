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
	let temp = new Node(val)
  if(!this.head || !this.tail) {
  	this.head = temp;
  	this.tail = temp;
  } else {
  	this.tail.next = temp;
  	temp.prev = this.tail;
  	this.tail = temp
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let temp = this.head;
  let past;
  
  while(temp) {
  	if(temp.val === val) {
  		if(temp == this.head) {
  			this.head = temp.next;
  			this.head.prev = null;
  		} else if (temp == this.tail) {
  			this.tail = temp.prev;
  			this.tail.next = null
  		} else {
  		past = temp.prev;
  		past.next = temp.next;
  		temp.next.prev = past;
  		break;
  		}
  	}
  	temp = temp.next
	}
}

module.exports = LinkedList;
