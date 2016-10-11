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
	//x is the sum of the indexes of each pair that needs to be swapped
	let x = array.length - 1;
	let y = Math.floor(array.length -1) / 2;

	//store value at index i in temp variable
	//identify position at which that value should be swapped with
	//swap values
	//repeat up until Math.floor of half the array's length
	for (var i = 0; i < y; i++) {
		let temp = array[i];
		array[i] = array[x - i];
		array[x - i] = temp;
	} 
	return array;
}


module.exports = reverseInPlace;