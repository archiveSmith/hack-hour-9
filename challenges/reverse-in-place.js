/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
	for(var i = 0, mid = Math.floor(array.length / 2), end = (array.length - 1); i < mid; i++) {
		let val = array[i];
		array[i] = array[end - i];
		array[end - i] = val;
	}
	
	return array
}

module.exports = reverseInPlace;