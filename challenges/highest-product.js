/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sorted = array.sort(sortNumber);
  return (sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]);
}

// sorting helper function
function sortNumber(a, b) {
  return a - b;
}

module.exports = highestProduct;
