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
	//loop thru the array and multiply every element except the one you are iterating on.
	if (array.length === 0) return 0;
	if (array.length === 1) return array;

	let arr = [];

	for (let i = 0; i < array.length; i++) {
		let product = 1;

		for (let j = 0; j < array.length; j++) {
			if (j === i) continue;
			product *= array[j];
		}
		arr.push(product);
	}

	// let arr2 = [];
	// let totalProduct = array.reduce((prev, curr) => prev * curr);

	// array.forEach((ele) => {
	// 	if (ele !== 0) arr2.push(totalProduct / ele)
	// });

	return arr;
}

module.exports = getAllProducts;
