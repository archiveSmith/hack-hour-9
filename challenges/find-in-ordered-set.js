/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let start = 0
  let stop = arr.length - 1
  let search = Math.floor((arr.length - 1 + start) / 2);
  while (arr[search] != target && start < stop) {
    if (target < arr[search]) {
      stop = search - 1;
    } else if (target > arr[search]) {
      start = search + 1;
    }
    search = Math.floor((stop + start) / 2);
  }
  return (arr[search] != target) ? false : true;
}


module.exports = findInOrderedSet;
