/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	for(let i = 0, leng = arr.length; i < leng; i++) {
		for(let j = i + 1; j < leng; j++) {
			if(arr[i] + arr[j] === n) {
				return true;
			}
		}
	}
	return false;
}

module.exports = twoSum;
