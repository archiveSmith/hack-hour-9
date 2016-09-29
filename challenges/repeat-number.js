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
	let sum = array.reduce((a, b) => {
		return a + b;
	})

	let n = array.length - 1

	let compare = (0.5*n*(n + 1))
	
	return sum - compare
}

module.exports = repeatNumbers;
