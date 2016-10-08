/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr[0] === target) return true;
  let start = 0;
  let end = arr.length;
  while (start !== end) {
    const mid = Math.floor((end + start) / 2);
    if (arr[mid] === target) return true;
    if (start + 1 === end) {
      break;
    }
    if (arr[mid] > target) {
      end = mid;
    } else if (arr[mid] < target) {
      start = mid;
    }
  }
  return false;
}


module.exports = findInOrderedSet;
