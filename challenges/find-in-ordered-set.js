/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
	let number = arr[Math.floor(arr.length / 2)];
	
	//base case number === target	
	if(number === target) {
		return true; 
	}
	
	//base case if one element in array and not target
	if(arr.length === 1 && arr[0] !== target) {
		return false; 
	}
	
	//recursive call to half the array 
	 return number > target 
	 ? findInOrderedSet(arr.slice(0, Math.floor(arr.length / 2)), target)
	 : findInOrderedSet(arr.slice(Math.floor(arr.length / 2)), target);
}

module.exports = findInOrderedSet;
