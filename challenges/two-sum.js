/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
      if (arr[i] + arr[j] == n) return true;
    }
  }

  return false;
}

module.exports = twoSum;
