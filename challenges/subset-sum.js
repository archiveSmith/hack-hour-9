/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 *
 * extend this to work for subsetProduct
 */

function subsetSum(array, target) {
	if(target === 0) {
		return true;
	}

	if(array.length === 0) {
		return false;
	}

	return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);

	var result = false;

	find(array, target);
	
	return result;
	
	// motor function
	function find(array, target) {
			
		// base case - if array is empty return 0
		if(array.length === 0) {
			return 0;
		}
		
		var temp;
		
		for(var i = 0; i < array.length; i++) {
			temp = array[i] + subsetSum(array.slice(i+1), target);
		}
		
		if(temp === target) {
			result = true;
		}
		
		return temp;
	}
	
}

/* test cases */
console.log(subsetSum([3, 7, 4, 2], 5)); //- > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); //-> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); //-> false
console.log(subsetSum([8, -2, 1, -3], 6)); //-> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;
