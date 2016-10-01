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
	let newObj = {};
	for(var i = 0; i < array.length; i++) {
		if(newObj[array[i]]) {
			return array[i];
		} else {
			newObj[array[i]] = 1;
		}
	}
	return undefined; 

	// let result;
	// array.sort(function(a, b) { 
	// 	if(a === b) {
	// 		result = a;
	// 	}
	// });
	// Or*** find the difference between the sum and the length 
	
	
}

module.exports = repeatNumbers;
