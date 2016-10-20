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


function deleteDups(head) {
  function listToArr(head) {
    let vals = [];
    for (let node = head; node; node = node.next) {
      if (!vals.includes(node.value)) {
        vals.push(node.value);
      }
    }
    return vals;
  }
  function arrToList(array) {
    function Node(val, next) {
      this.value = val;
      this.next = (next) ? next : null;
    }
    let arr = array.slice();
    let head = new Node(arr.shift());
    let tail = head;
    while (arr.length > 0) {
      let currVal = arr.shift();
      tail.next = new Node(currVal);
      tail = tail.next;
    }
    return head;
  }
  return arrToList(listToArr(head))
}

// let l = new Node(1);
// l.next = new Node(2);
// l.next.next = new Node(3);
// l.next.next.next = new Node(3);
// l.next.next.next.next = new Node(3);

// function pl(h) {
//   for (let node = h; node; node = node.next) {
//     console.log(node.value);
//   }
// }




// console.log(deleteDups(l))

module.exports = deleteDups;
