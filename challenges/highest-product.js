/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
if (array.length < 3) return 0;
const sorted = array.sort((a,b) => b - a ),
max = (array[0] * array[1] * array[2]),
min =  (array[0] * array[array.length-1] * array[array.length-2]);
if (Math.max(...array) < 0){
	return max;
} 
return Math.max(max,min);
}

module.exports = highestProduct;
