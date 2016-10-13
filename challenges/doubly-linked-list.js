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
  this.tail.next = newNode
  newNode.prev = this.tail;
  let oldTail = this.tail;
  newNode.next = null;
  return newNode
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let pointer = this.head;
  while (pointer) {
    console.log('pointer', pointer)
    if (pointer.val === val) {
      console.log('remove')
      pointer.next.pre
    }
    pointer = pointer.next;
  }
};


let list = new LinkedList()
let firstNode = new Node(6);
list.head = firstNode;
list.tail = firstNode;
list.add(5);

list.remove(5)

module.exports = LinkedList;
