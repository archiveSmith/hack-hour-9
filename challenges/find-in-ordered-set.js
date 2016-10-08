/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length === 1) {
    return (arr[0] === target);
  }

  const midIndex = Math.floor(arr.length / 2);
  const midValue = arr[midIndex];

  if (target === midValue) return true;
  if (target < midValue) return findInOrderedSet(arr.slice(0, midIndex), target);
  return findInOrderedSet(arr.slice(midIndex, arr.length), target);
}


module.exports = findInOrderedSet;
