/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;

  function descending(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
  }

  function multiply(a, b) {return a * b};

  return array.sort(descending).slice(0, 3).reduce(multiply);
}


module.exports = highestProduct;
