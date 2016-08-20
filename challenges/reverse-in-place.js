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
"use strict"
function reverseInPlace(array) {
for (var i = 0, j = array.length - 1; i < j; i++, j--) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	}
}

let x = [0, 1, 2, 3, 4, 5];
reverseInPlace(x);
console.log(x);
// module.exports = reverseInPlace;