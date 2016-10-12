/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

	//get midpoint of arr
	//track the range of where to look
	function recur(startIndex, endIndex) {
		const beg = arr[startIndex];
		const end = arr[endIndex];
		const midIndex = Math.floor((startIndex + endIndex) / 2);
		const midpoint = arr[midIndex];
		
		if (target === beg) return startIndex;
		if (target === end) return endIndex;

		if (target < midpoint) {
			return recur(startIndex, midIndex - 1);
		} else {
			return recur(midIndex, endIndex);
		}
	}
	return recur(0, arr.length -1);
}
//divide the array into halves of about equal lengths
//check if target is less than the mid point or greater or equal to it
//depending on which bucket it lands in, use that as the new array to continue breaking it down
//do this until the 

module.exports = findInOrderedSet;
