/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {

	var output = [];
	
	// check edge cases - return [0]
	if(array.length === 0) {
		return [0];
	} else if(array.length === 1) {
		return array;
	}

	// loop through the array
	for(var i = 0; i < array.length; ++i) {
		var product = 1;
		
		// inner loop - multiply each elements EXCEPT the value at index i
		for(var j = 0; j < array.length; ++j) {
			if(j !== i) {
				product *= array[j];
			}
		}
		
		// append the result to output array
		output.push(product);
		
	}
	
	// return output array
	return output;	
}

/* tests */
/*
console.log(getAllProducts([1, 7, 3, 4])); //->  [84, 12, 28, 21]
console.log(getAllProducts([1, 0, 3, 4])); //->  [0, 12, 0, 0]
console.log(getAllProducts([1, 7])); //-> [7, 1]
console.log(getAllProducts([7])); // [7]
console.log(getAllProducts([])); // [0]
*/

module.exports = getAllProducts;