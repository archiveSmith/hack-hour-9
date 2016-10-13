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
LinkedList.prototype.add = function add(val) {
  const newNode = new Node(val);
  if (this.head) {
    for (let i = this.head; i; i = i.next) {
      if (i.next === null) {
        i.next = newNode;
        newNode.prev = i;
        this.tail = newNode;
        break;
      }
    }
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function remove(val) {
  for (let i = this.head; i; i = i.next) {
    if (i.value === val) {
      const prevTemp = i.prev;
      const nextTemp = i.next;
      prevTemp.next = nextTemp;
      nextTemp.prev = prevTemp;
      break;
    }
  }
};


module.exports = LinkedList;
