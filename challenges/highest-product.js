/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return undefined;

  let topIntegers = array.reduce((cache, currentInt) => {
    cache.push(currentInt);
    if (cache.length > 3) {
      let smallest = Math.min(...cache);
      let index = cache.indexOf(smallest);
      cache.splice(index, 1);
    }
    return cache;
  }, []);

  return topIntegers[0] * topIntegers[1] * topIntegers[2];
}

module.exports = highestProduct;
