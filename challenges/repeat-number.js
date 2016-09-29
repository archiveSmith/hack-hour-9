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
	
	let cache = {};
	let num;
	
	for (let i = 0; i < array.length; i++) {
		if(cache[array[i]]) {
			num = array[i];
		} else {
			cache[array[i]] = 1;
			num = null;
		}
	}
	
	return num;

}


module.exports = repeatNumbers;
