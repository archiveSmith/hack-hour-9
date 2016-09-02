/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3) return 0;
	
	array.sort((a, b) => a - b);
	
	let leng = array.length;
	let negProd = array[0] * array[1] * array[leng - 1];
	let posProd = array[leng - 3] * array[leng - 2] * array[leng - 1];

	return Math.max(negProd, posProd);
}



module.exports = highestProduct;
