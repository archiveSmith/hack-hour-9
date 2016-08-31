/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) {
    return 0;
  }
  let sorted = array.sort(sortNumber);
  if (Math.abs(sorted[0] * sorted[1]) > ((sorted[sorted.length - 2]) * (sorted[sorted.length - 3]))) {
    return (sorted[0] * sorted[1] * sorted[sorted.length - 1]);
  }
  return (sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3]);

}
// sorting helper function
function sortNumber(a, b) {
  return a - b;
}

module.exports = highestProduct;
