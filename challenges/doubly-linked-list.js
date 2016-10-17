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
LinkedList.prototype.add = function(val){
	const newNode = new Node(val);
	if (!this.head){
		this.head = this.tail = newNode;
	} else {
		newNode.prev = this.tail;
		this.tail.next = this.tail = newNode;
	}
}

LinkedList.prototype.remove = function(val){
	let cur = this.head;
	while(cur){
		if (cur.val === val && cur.prev && cur.next){
			cur.next.prev = cur.prev;
			cur.prev.next = cur.next;
		}
		if (!cur.prev && cur.val === val){
			cur.next.prev = null;
			this.head = cur.next;
		}
		if(!cur.next && cur.val === val){
			this.tail.next = this.tail = cur.prev;
			cur.prev.next = null;
		}
		cur = cur.next;
	}
}

module.exports = LinkedList;
