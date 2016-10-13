/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 * 1x7x3 // 1x7x4 // 7x3x4 // 
 *
 * do not use division, becuas
 * e zero might be in the array and you cannot divide by zero
 */


function getProducts(array) {
  let nums = [];

  nums = array.map((current, index, array) => {
    var tempArr = array.slice();
    tempArr.splice(index, 1)
    product =  tempArr.reduce((a, b) => {
      return a* b;
    })
    return product;
  })

  return nums;
}

// console.log(getProducts([1, 7, 3, 4]));

module.exports = getAllProducts