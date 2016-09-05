/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;

  const sortedArr = array.sort();
  const length = sortedArr.length;
  const highestProductPos = sortedArr[length - 1] * sortedArr[length - 2] * sortedArr[length - 3];
  const highestProductNeg = sortedArr[0] * sortedArr[1] * sortedArr[length - 1];

  return highestProductPos > highestProductNeg ? highestProductPos : highestProductNeg;
}

module.exports = highestProduct;


// Original Solution (ignores negative numbers)

// function highestProduct(array) {
//   if (!Array.isArray(array) || array.length < 3) return 0;

//   let topIntegers = array.reduce((cache, currentInt) => {
//     cache.push(currentInt);
//     if (cache.length > 3) {
//       let smallest = Math.min(...cache);
//       let index = cache.indexOf(smallest);
//       cache.splice(index, 1);
//     }
//     return cache;
//   }, []);

//   return topIntegers[0] * topIntegers[1] * topIntegers[2];
// }
