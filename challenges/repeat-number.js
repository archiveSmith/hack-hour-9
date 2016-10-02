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
	// let newObj = {};
	// for(var i = 0; i < array.length; i++) {
	// 	if(newObj[array[i]]) {
	// 		return array[i];
	// 	} else {
	// 		newObj[array[i]] = 1;
	// 	}
	// }
	// return undefined; 
	array.sort(function(a,b) {
		return a - b;
	})
	for(let i = 0; i < array.length; i++) {
		if(array[i] === array[i + 1]) {
			return array[i]; 
		}
	}
	// let result;
	// array.sort(function(a, b) { 
	// 	if(a === b) {
	// 		result = a;
	// 	}
	// });
	
	
}

module.exports = repeatNumbers;
