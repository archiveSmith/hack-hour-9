/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	for(let i = 0; i < arr.length; i++) {
		let target = n - arr[i];
		for(let j = 0; j < arr.length; j++) {
			if(arr[j] === target && j !== i) return true;
		}
	}
	return false;
}
module.exports = twoSum;
