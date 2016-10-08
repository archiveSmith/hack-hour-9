/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(array, number) {
  let length = array.length;
  let left = 0;
  let right = length - 1;
  let middle = null;

  while (left <= right) {
    middle = (left + right) / 2
    if (array[middle] === number) {
      return true
    }
    if (array[middle] > number) {
      right = middle - 1
    }
    else {
      left = middle + 1
    }
  }
  return false
}


module.exports = findInOrderedSet;
