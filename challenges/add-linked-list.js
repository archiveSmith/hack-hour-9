/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function addLinkedList(ll1, ll2) {
  addZerosToLL(ll1, ll2);
  return numberToLL(llToNumber(ll1) + llToNumber(ll2));
  function getLLLength(ll) {
    let count = 0;
    for (let i = ll; i; i = i.next) {
      count++;
    }
    return count;
  }

  function addZerosToLL(l1, l2) {
    const l1Length = getLLLength(l1);
    const l2Length = getLLLength(l2);
    if (l1Length === l2Length) return;
    if (l1Length > l2Length) {
      const diff = l1Length - l2Length;
      let end;
      for (let i = l2; i; i = i.next) {
        if (i.next === null) end = i;
      }
      for (let i = 0, j = end; i < diff; i++, j = j.next) {
        j.next = new Node(0);
      }
    }
    const diff = l2Length - l1Length;
    let end;
    for (let i = l1; i; i = i.next) {
      if (i.next === null) end = i;
    }
    for (let i = 0, j = end; i < diff; i++, j = j.next) {
      j.next = new Node(0);
    }
  }

  function linkedListToArray(ll) {
    const arr = [];
    for (let i = ll; i; i = i.next) {
      arr.push(i.value);
    }
    return arr;
  }

  function reverseArray(arr) {
    return arr.reverse();
  }

  function arrayToString(arr) {
    return arr.reduce((a, b) => a.toString() + b.toString());
  }

  function stringToNumber(str) {
    return +str;
  }

  function llToNumber(ll) {
    return stringToNumber(arrayToString(reverseArray(linkedListToArray(ll))));
  }

  function numberToString(num) {
    return num.toString();
  }

  function stringToArray(str) {
    return str.split('');
  }

  function arrayToLL(arr) {
    const node = new Node(arr[0]);
    for (let i = 1, j = node; i < arr.length; i++ , j = j.next) {
      j.next = new Node(arr[i]);
    }
    return node;
  }

  function numberToLL(num) {
    return arrayToLL(reverseArray(stringToArray(numberToString(num))));
  }
}

// // 315

// const l1 = new Node(4);
// l1.next = new Node(2);
// l1.next.next = new Node(2);

// // 592

// const l2 = new Node(5);
// l2.next = new Node(9);
// l2.next.next = new Node(2);

// console.log(addLinkedList(l1, l2));


// // 808


// function addLinkedList(l1, l2) {
//   let l1Str = '';
//   let l2Str = '';
//   for (let i = l1; i; i = i.next) {
//     l1Str += i.value.toString();
//   }
//   for (let i = l2; i; i = i.next) {
//     l2Str += i.value.toString();
//   }
//   l1Str = l1Str.split('').reverse().join('');
//   l2Str = l2Str.split('').reverse().join('');
//   let num = Number(l1Str) + Number(l2Str);
//   num = num.toString().split('').reverse();
//   const ll = new Node(+num[0]);
//   for (let i = 1, j = ll; i < num.length; i++, j = j.next) {
//     const node = new Node(+num[i]);
//     j.next = node;
//   }
//   return ll;
// }



module.exports = { Node, addLinkedList };
