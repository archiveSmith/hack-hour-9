/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort((a,b) => b - a);
  let result1 = 0;
  let result2 = 0;
  console.log(sortedArr);

  if (array.length > 2) {
    result1 = sortedArr[0] * sortedArr[1] * sortedArr[2];
    result2 = sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2] * sortedArr[0];
  } else if (array.length > 1) {
    result1 = sortedArr[0] * sortedArr[1];
    result2 = sortedArr[sortedArr.length-1] * sortedArr[0];
  } else {
    result1 = sortedArr[0];
  }

  return result1 > result2 ? result1 : result2;
}


module.exports = highestProduct;
