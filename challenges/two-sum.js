/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    if (arr.length === 0) return false;
    if (typeof n !== "number") return undefined;
	const cache = {};
	for (let num of arr) {
		let diff = n - num;
		if (cache[num]) return true;
		cache[diff] = true;
	}
	return false;
}

module.exports = twoSum;
