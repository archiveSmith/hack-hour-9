/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
//resource for future reference: http://stackoverflow.com/questions/9152890/what-would-cause-an-algorithm-to-have-olog-n-complexity

function findInOrderedSet(arr, target) {
	var mid;
	if (target > arr[arr.length-1] || target < arr[0]){
		return false;
	}
	while(arr.length){
		mid = Math.floor(arr.length/2);
		if(target === arr[mid]){
			return true;
		} else if (target < arr[mid]){
			arr = arr.slice(0, mid);
		} else {
			arr = arr.slice(mid+1);	
		}
	}
	return false;
}


module.exports = findInOrderedSet;
