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

let printNodes = (L) => {
  let curr = L.head;
  console.log(curr.val);

  while (curr.next !== null) {
    curr = curr.next
    console.log(curr.val);

  }
};

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  let newNode = new Node(val);
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(v) {
  let current = this.head;
  while (current.next !== null) {
    if (current.val === v) {
      let front = current.next;
      current.prev.next = front;
    }
    current = current.next;
  }
};

let node1 = new Node(1);
let node2 = node1.next = new Node(2);
let node3 = node2.next = new Node(3);
node2.prev = node1;
node3.prev = node2;

let LL = new LinkedList;
LL.head = node1;
LL.tail = node3;

LL.add(4);

LL.remove(4);

console.log(printNodes(LL));

module.exports = LinkedList;