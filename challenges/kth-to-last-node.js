/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */
'use strict'

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (k <= 0 || !head) {
    console.log("invalid input");
    if (k <= 0) {
      console.log('please provide a positive interger input for the first argument');
    } else {
      console.log('please provide a valid list reference');
    }
    return false;
  }
  const history = [];
  let currentNode = head;
  let ending = '';
  if (k === 1) {
    ending = 'st';
  } else if (k === 2) {
    ending = 'nd';
  } else if (k === 3) {
    ending = 'rd';
  } else {
    ending = 'th';
  }
  while (history.length < k) {
    if (!currentNode) {
      console.log("there is no " + k + ending + " node");
      return false;
    }
    history.push(currentNode);
    currentNode = currentNode.next;
  }
  while (currentNode) {
    history.shift();
    history.push(currentNode);
    currentNode = currentNode.next;
  }
  if (history.length === k) {
    return history.shift().value;
  }
}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};