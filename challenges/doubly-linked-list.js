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
	// create new node
	var newNode = new Node(val);
	
	// if list currently empty
	if(this.head === null && this.tail === null) {
		this.head = this.tail = newNode;
	} else { // list not currently empty		
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
	}
	
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
  // check if empty list
  if(this.head === null && this.tail === null) {
	  return false;
  }
  
  var curr = this.head;
  
  while(curr !== null) {
	if(curr.val === val) { // found it, remove it and exit
		if(curr.prev === null && curr.next === null) { // special case of only 1 node in list
			// reset head and tail
			this.head = this.tail = null;
		} else if(curr.prev === null) { // node at head of list
			// reset head
			this.head = curr.next;
			curr.next.prev = null;
		} else if(curr.next === null) { // node at tail of list
			// reset tail
			this.tail = curr.prev;
			curr.prev.next = null;
		} else { // node at middle of list
			curr.prev.next = curr.next;
			curr.next.prev = curr.prev;	
		}
		// return true to indicate inputted value was found and removed
		return true;
	}
	
	// not found, check the next node
	curr = curr.next;
  }
  
  // inputted value not found in list
  return false;
};

/* tests */
/*
var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log('before remove 2', list);
list.remove(2);
console.log('after remove 2', list);

var list2 = new LinkedList();
list2.add(1);
list2.add(2);
list2.add(3);

console.log('before remove 1', list2);
list2.remove(1);
console.log('after remove 1', list2);

var list3 = new LinkedList();
list3.add(1);
list3.add(2);
list3.add(3);

console.log('before remove 3', list3);
list3.remove(3);
console.log('after remove 3', list3);
*/

module.exports = LinkedList;
