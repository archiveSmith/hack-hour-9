/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let middle = Math.floor(arr.length/2);

	if(!arr.length) {
		return false;
	}
  if(arr[middle] === target) {
  	return true;
  } else if (arr[middle] > target) {
  	arr = arr.slice(0, middle);
  } else {
  	arr = arr.slice(middle+1, arr.length)
  }

  return findInOrderedSet(arr, target)
}

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);

module.exports = findInOrderedSet;
