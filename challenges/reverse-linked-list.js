/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  if (!head) {
    return undefined;
  } else if (head.next === null) {
    return head;
  }

  let listArr = [];
  for (let i = head; i; i = i.next) {
    listArr.push(i);
  }
  var newList = listArr.pop(), output = newList;
  for (let j = listArr.length - 1; j >= 0; j--) {
    newList.next = listArr[j];
    newList.next.next = null;
    newList = newList.next;
  }
  return output;
}


// testing code
// l1 = new Node('l10');

// for(let x=1, l=l1; x<6; x++, l=l.next){
//  l.next = new Node('l1'+x);
// }

// console.log('l1',l1);

// l1 = new Node(1);
// l1.next = new Node(4);
// l1.next.next = new Node(6);

// l2 = new Node(2);

// reverseLinkedList(l1);

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
