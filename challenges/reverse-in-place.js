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
	/*
	var start = 0;
	var end = array.length - 1;
	
	while(start < end) {
		var temp = array[start];
		array[start] = array[end];
		array[end] = temp;
		
		start++;
		end--;
		
	}
	
	return array;
	*/
	
	var ptr = array.length - 1;
	
	while(ptr >= 0) {
		array.push(array[ptr]);
		array.splice(ptr, 1);
		ptr--;
	}
	
	return array;
	
}

/* tests */
/*
var test1 = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseInPlace(test1));

var test2 = ['h', 'a', 'l', 'o'];
console.log(reverseInPlace(test2));

console.log(reverseInPlace([]));
console.log(reverseInPlace(['I']));
*/


module.exports = reverseInPlace;