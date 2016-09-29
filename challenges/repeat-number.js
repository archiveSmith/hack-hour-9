/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let arr = array.slice();
	arr.sort((a, b) => a - b);
	for (var i = 1; i < arr.length; i++) {
		if (arr[i - 1] === arr[i]) return arr[i];
	}
	return 0;
}

module.exports = repeatNumbers;
