/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(linkedList) {
  let rebuilt;
  const buffer = [];
  while (linkedList) {
    if (buffer.indexOf(linkedList.value) === -1) {
      buffer.push(linkedList.value)
    }
    linkedList = linkedList.next;
  }
  
  let head = new Node(buffer[0])
  let curr = head;
  for (let index = 1; index < buffer.length; index++){
    curr = curr.next = new Node(buffer[index])
  }
  console.log(buffer)
  console.log(head)
  return head;
}

 
//  var node1 = new Node('1');
//  var node2 = node1.next = new Node('2');
//  var node3 = node2.next = new Node('2');
//  var node4 = node3.next = new Node('4');

// deleteDups(node1)


module.exports = deleteDups;
