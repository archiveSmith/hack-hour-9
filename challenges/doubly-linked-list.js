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
LinkedList.prototype.add = function (val) {
  if (this.tail) {
    this.tail.next = new Node(val)
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next
  }
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let cur = this.head;
  while (cur) {
    if (cur.val === val) {
      if (!cur.prev) {
        this.head = cur.next;
        if (cur.next) {
        	cur.next.prev = null;
        } else {
        	this.tail = null
        }
        return true
      } else {
        cur.prev.next = cur.next;
        if (cur.next)  {
        	cur.next.prev = cur.prev;
        } else {
        	this.tail = cur.prev;
        }
        
        return true;
      }
    }
    cur = cur.next
  }
  return false;
};

module.exports = LinkedList;
