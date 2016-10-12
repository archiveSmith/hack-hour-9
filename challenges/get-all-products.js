/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getAllProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  if (array.length === 0) return [0];
  if (array.length === 1) return array;

  const combos = [];

  for (let i = 0; i < array.length; i++) {
    const LH = array.slice(0, i);
    const RH = array.slice(i + 1);
    combos.push(LH.concat(RH));
  }

  return combos.map((arr) => {
    return arr.reduce((prev, curr) => {
      return prev * curr;
    });
  });
}

module.exports = getAllProducts;
