/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function l1() {
  this._length = 0;
  this.head = null;
}

function l2() {
  this._length = 0;
  this.head = null;
}

l1.prototype.add = function(value) {
  var node = new Node(value),
    currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};


l2.prototype.add = function(value) {
  var node = new Node(value),
    currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};

l2.add(3);
l2.add(3);
l2.add(3);
l2.add(3);
l1.add(3);
l1.add(3);
l1.add(3);
l1.add(3);


function zip(l1, l2) {
  let l2Arr = [];
  for (i = l2; i.next; i = i.next) {
    l2Arr.push([i]);
  }
  for (i = l1; i.next; i = i.next) {
    let oldNext = i.next;
    i.next = l2Arr[i]
    i.next.next = oldNext;
  }
  return l1;
};

module.exports = {
  Node: Node,
  zip: zip
};
