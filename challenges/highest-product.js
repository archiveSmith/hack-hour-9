/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array, target = 1) {
  if (!array.length) {
    return target;
  }
  const useItem = highestProduct(array.slice(1), target * array[0]);
  const ignoreItem = highestProduct(array.slice(1), target);
  return useItem > ignoreItem ? useItem : ignoreItem;
}


module.exports = highestProduct;
