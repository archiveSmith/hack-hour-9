/**
 * Given an array of integers, 
 find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// if not at least three numbers, return
	if(array.length < 3) return;
	// sort array largest to smallest
	array.sort(function(a,b) {
	    return b - a;
	});
	// return product of three highest numbers
	return array[0] * array[1] * array[2];
}


module.exports = highestProduct;
