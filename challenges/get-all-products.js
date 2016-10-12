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
  if (array.length === 0) {
    return [0];
  }
  if (array.length === 1) {
    return array;
  }

  let arrOfArrs = createArrays(array);
  return arrOfArrs.map((arr) => {
    return arr.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue * currentValue;
    })
  });
};

function createArrays(erray) {
  let arrOfArrs = [];
  let arrStart = [...erray];
  for (var i = 0; i < erray.length; i++) {
    arrStart.splice(i, 1)
    arrOfArrs.push(arrStart);
    arrStart = [...erray];
  }
  return arrOfArrs
}

console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;