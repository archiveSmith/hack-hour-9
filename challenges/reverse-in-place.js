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
for (let i = 1; i < array.length / 2; ++i) {
		let temp = array[i];
		array[i] = array[array.length - i];
		array[array.length - i] = temp;
}
let temp = array.shift();
array[array.length] = temp;
return array;
	
}


module.exports = reverseInPlace;


}