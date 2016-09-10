/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const len = array.length;
  if (len < 3) {
    return undefined;
  } else if (len === 3) {
    return array[0] * array[1] * array[2];
  }
  let possArr = [], negArr = [];
  for (let i = 0; i < len; i++) {
    if (array[i] > 0) {
      possArr.push(array[i])
    } else {
      negArr.push(array[i])
    }
  }
  possArr = possArr.sort((a, b) => { return b - a })
  negArr = negArr.sort((a, b) => { return a - b })

  const possNum = possArr[0] * possArr[1] * possArr[2];
  const negNum = negArr[0] * negArr[1] * possArr[0];

  if (isNaN(negNum) || possNum > negNum) {
    return possNum;
  } else {
    return negNum;
  }
}

module.exports = highestProduct;

