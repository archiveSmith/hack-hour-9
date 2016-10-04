/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let length = arr.length;
  let maxSoFar = Number.NEGATIVE_INFINITY;
  let maxFromHere = Number.NEGATIVE_INFINITY;
  let isAllNegative = true;
  for (let i = 0; i < length; i++) {
    if (arr[i] >= 0) {
      isAllNegative = false;
    }
    maxFromHere += arr[i];
    if (maxFromHere < 0) {
      maxFromHere = 0;
    }
    if (maxSoFar < maxFromHere) {
      maxSoFar = maxFromHere
    }
  }

  if (isAllNegative) {
    Array.max = function (array) {
      return Math.max.apply(Math, array);
    };
    return Array.max(arr);
  }


  return maxSoFar;
}

module.exports = maxSubarray;
