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
  let newNode = new Node(val);
  if (!this.head) {
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
	//find value, keep reference to 
	// case 1: the value is the first node and the list has 1 node
	let curr = this.head;
	if (val === curr.val && !curr.next) {
		this.head = null;
		this.tail = null;
	//case 2: the value is the head and the list extends
	} else if (val === curr.val && curr.next) {
		this.head = curr.next;
	} else {
		while (curr && curr.next) {
			// case 3: the value is one of the rest
			if (curr.next.val === val && curr.next.next) {
				curr.next = curr.next.next;
				curr.next.prev = curr;
			//case 4: the value is the last node
			}  else if (!curr.next.next) {
				// console.log(curr.val, "this should be the second to last value")
				curr.next = null;
			}
			curr = curr.next;
		}
	}
};

module.exports = LinkedList;
