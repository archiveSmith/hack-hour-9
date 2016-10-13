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
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  }
  else {
    let holdNode = this.tail;
    console.log('holdNode', this.tail)
    this.tail.next = new Node(val)
    console.log('this.tail.next new node', this.tail.next)
    this.tail.next.prev = holdNode;
    console.log('this.tail.next.prev', this.tail.next.prev)

    this.tail = this.tail.next
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    return
  }

  for (let moveNode = this.head; moveNode.next !== null; moveNode = moveNode.next) {
    console.log(moveNode.val)
    if (moveNode.val === val) {
     
      let prevNode = moveNode.prev;
      let nextNode = moveNode.next;
      console.log('movenode ', moveNode)
      console.log('prevnode ', prevNode)
      console.log('nextNode ', nextNode)
       
      prevNode.next = nextNode;
      return
    }
      
  }
};
// var myList = new LinkedList();
// myList.add('a');
// myList.add('b');
// myList.add('c');
// myList.add('d');
// myList.add('e')
// // console.log(myList)
// myList.remove('b')
// console.log(myList)

module.exports = LinkedList;
