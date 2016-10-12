/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */
function getAllProducts(array) {
  const product = array.reduce((a, b) => {
    if (a === 0) {
      return b * 1;
    } else if (b === 0) {
      return a * 1;
    }
    return a * b;
  });
  return array.map((el) => {
    if (el === 0) {
      return 0;
    }
    return product / el;
  });
}

module.exports = getAllProducts;
