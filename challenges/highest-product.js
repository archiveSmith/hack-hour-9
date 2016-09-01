/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) {
    return 0;
  }
  //sorts array from smallest to largest
  var sorted = array.sort(function(a, b) {
    return a - b;
  });
  //product of the 2 largest abs values of negatives & last number in sorted array
  var firstSet = Math.abs(sorted[0]) * Math.abs(sorted[1]) * sorted[sorted.length-1];
  //product of last 3 numbers in sorted array
  var lastSet = sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3];
  //return larger of the two products
  return firstSet > lastSet ? firstSet : lastSet;
}


module.exports = highestProduct;
