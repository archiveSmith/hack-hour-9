/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let counter = (arr.length - 1) / 2;
  console.log(arr[counter]);
  while (counter > 0 && counter < arr.length - 1) {
    if (arr[counter] === target) { return true };
    if (arr[counter] > target) {
      counter--
    } else {
      counter++
    }
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4));
console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;