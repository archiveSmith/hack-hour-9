/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	
	// binary search approach
	var midIndex = Math.floor(arr.length / 2);
	
	if(target === arr[midIndex]) { // found it
		return true;
	} else if(target > arr[midIndex]) { // search right side if available
		if(arr.length > 1) {
			return findInOrderedSet(arr.slice(midIndex), target);
		} 
	} else {  // search left side if available
		if(arr.length > 1) {
			return findInOrderedSet(arr.slice(0, midIndex), target);	
		}
	}
	// not found
	return false;
}

/*
var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false

console.log(findInOrderedSet(nums, 45)); // -> true
console.log(findInOrderedSet(nums, 22)); // -> false
console.log(findInOrderedSet(nums, 0)); // -> false
*/

module.exports = findInOrderedSet;
