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
   // Iterate through linked list
    let temp = this.head;
    while (temp && temp.val !== val) {
        temp = temp.next;
    }

    // If we encounter the value, remove the node
    if (temp) {
        if (temp === this.head) {
          temp.next.prev = null;
          this.head = temp.next;
        } else {
          temp.prev.next = temp.next;
          // account for removing the tail
          if (temp.next) temp.next.prev = temp.prev;
        }
    }
};

module.exports = LinkedList;
