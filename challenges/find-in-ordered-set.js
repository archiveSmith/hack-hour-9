/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target, begin = 0, end = arr.length, halfway = Math.floor((begin + end)/ 2)) {
//   // if (begin === end) return false;
//   //
//   // const halfway = Math.floor((begin + end) / 2);
//   // if (arr[halfway] === target) return true;
//   //
//   // // return findInOrderedSet(arr, target, begin, halfway) ||
//   // //        findInOrderedSet(arr, target, halfway + 1, end);
//   //const halfway = Math.floor((begin + end) / 2);
//
//   return begin === end ?
//     false :
//     arr[halfway] === target ?
//       true :
//       arr[halfway] > target ?
//         findInOrderedSet(arr, target, begin, halfway) :
//         findInOrderedSet(arr, target, halfway + 1, end);
// }

const findInOrderedSet = (arr, target, begin = 0, end = arr ? arr.length : null,
                          halfway = Math.floor((begin + end)/ 2) ) =>
  !arr || begin === end ?
    false :
    arr[halfway] === target ?
      true :
      arr[halfway] > target ?
        findInOrderedSet(arr, target, begin, halfway) :
        findInOrderedSet(arr, target, halfway + 1, end)



module.exports = findInOrderedSet;
