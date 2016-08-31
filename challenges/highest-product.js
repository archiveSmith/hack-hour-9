/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  
  let product = 0;
  let length = array.length;
  
  array.sort(function(a, b) {
  	return a - b;
  });
  product = array[length-1] * array[length-2] * array[length-3];
  
  return product; 
}

module.exports = highestProduct;
