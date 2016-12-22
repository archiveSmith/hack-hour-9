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
	let j = array.length - 1; 
	for(var i = 0; i < Math.floor(array.length / 2); i++) {
		[array[i], array[j]] = [array[j], array[i]]; 
		j--; 
	}
	return array;
}

module.exports = reverseInPlace;