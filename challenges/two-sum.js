/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	if (typeof n !== 'number'){
		return undefined;
	}
	if (arr.length === 0){
		return false;
	}

	for (var i = 0; i < arr.length; i++){
		if (arr.slice(i+1).indexOf(n-arr[i]) !== -1) {
			return true;
		}
	}
	return false;
}

module.exports = twoSum;
