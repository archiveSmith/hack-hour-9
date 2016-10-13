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
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = this.head;
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
  for (let i = this.head; i; i = i.next) {
    if (i.val === val && i.next) {
      if (i.prev === null) {
        this.head = i.next;
        i.next.prev = null;
        break;
      }
      i.next.prev = i.prev;
      i.prev.next = i.next;
      break;
    } else if (i.val === val) {
      this.tail = i.prev;
      i.prev.next = null;
      i.prev = null;
      break;
    }
  }
};

// // tests
// const Dlist = new LinkedList();
// Dlist.add(1);
// Dlist.add(2);
// Dlist.add(2);
// Dlist.add(3);
// Dlist.add(4);
// Dlist.add(5);
// Dlist.add(6);
// console.log(Dlist);
// Dlist.remove(3);
// Dlist.remove(2);
// Dlist.remove(1);
// Dlist.remove(6);
// console.log(Dlist);

module.exports = LinkedList;
