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
  	this.tail = this.head;
  } else {
  	
  	let curr = this.head;
  	
  	while(curr.next) {
  		curr = curr.next;
  	}
  
  	curr.next = node;
  	node.prev = this.tail;
  	this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	
	if(this.head.val === val) {
		if(this.head.next) {
			this.head = this.head.next;
			this.head.prev = null;
			return true;
		} else {
			this.head = null;
			this.tail = null;
			return true;
		}
	} 
	
	let curr = this.head.next;
	
	while(curr.val !== val && curr.next) {
		curr = curr.next;
	} 
	//go until the tail, check the tail
	if(curr.val === val) { 
		let prev = curr.prev;
		
		prev.next = curr.next;
		curr.next.prev = prev;
	} else {
		return false;
	}	
};


let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.remove(11);

module.exports = LinkedList;
