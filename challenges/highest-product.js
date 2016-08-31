/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3){
		return "ERROR"
	}
	array = array.sort(function(a, b) {
  		return b - a;
	});
	return array[0]*array[1]*array[2]
}

module.exports = highestProduct;
