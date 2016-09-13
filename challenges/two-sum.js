/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
if(!arr) return undefined;
arr = arr.sort(function(a, b) {return a - b;});
let idx1 = 0;
let idx2 = arr.length - 1;
let sum = arr[idx1] + arr[idx2];
	while(idx1 !== idx2) {
		if (sum === n) return true; 
		sum > n ? idx2-- : idx1++; 
		sum = arr[idx1] + arr[idx2];
	}
return false; 
}

module.exports = twoSum;
