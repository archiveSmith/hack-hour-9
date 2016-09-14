/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

	let difference = n - arr[0];
	let sliced = arr.slice(1);
	
	while(sliced.length) {
		if (sliced.indexOf(difference) > -1) {
			return true;
		} else {
			difference = n-sliced[0]
			sliced = sliced.slice(1);
		}
	}
	return false;
}

let nums = [1,2,3,4,4];
twoSum(nums, 7)

module.exports = twoSum;
