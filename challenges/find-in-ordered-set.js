/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	let half = Math.ceil(arr.length / 2);

	if (target === arr[0]) return true;
	if (target === arr[half]) return true;
	if (arr.length === 1) return false;
	
	if (target < arr[half]) arr = arr.splice(0, half);
	if (target > arr[half]) arr = arr.splice(half, arr.length);
	
	return findInOrderedSet(arr, target);
}


module.exports = findInOrderedSet;
