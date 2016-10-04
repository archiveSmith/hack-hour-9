/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  return arr.reduce((memo, num, index) => {
    memo.sum = memo.sum + num;
    if (memo.sum > memo.max) {
      memo.max = memo.sum;
    }
    if (memo.sum < 0) memo.sum = 0;
    return memo;
  }, { max: -Infinity, sum: 0 }).max;
}

module.exports = maxSubarray;
