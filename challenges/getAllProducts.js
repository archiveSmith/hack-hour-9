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
	//result Array
	let result = [];
	let sliced = array.slice();
	let products;
	
	//return [0] if the array is empty and return the same array if it is length 1
	if(!array.length) {
		return [0];
	}
	
	if(array.length === 1) {
		return array;
	}

	for (let i = 0; i < array.length; i++) {
		sliced.splice(i,1);
		products = sliced.reduce((a,b) => a * b);
		result.push(products);
		sliced = array.slice();
	}
	return result;
}
getAllProducts([1, 7, 3, 4]);