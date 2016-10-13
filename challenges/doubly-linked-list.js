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

LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.tail = this.head = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail = this.tail.next = newNode;
  }
};

LinkedList.prototype.remove = function (val) {
  let current = this.head;

  while (current && current.val !== val) {
    current = current.next;
  }

  if (current) {
    if (current.prev) {
      current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
      else this.tail = current.prev;
    } else if (current.next) {
      this.head = current.next;
      if (current.next) current.next.prev = null;
      else this.tail = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return true;
  }

  return false;
};

module.exports = LinkedList;

// const list = new LinkedList();

// list.add(0);
// list.add(1);
// list.add(2);
// list.add(3);

// console.log(list);

// list.remove(5);
// list.remove(2);

// console.log(list);
