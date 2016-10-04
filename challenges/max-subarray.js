/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let output = arr.reduce((a, b) => { return a + b; }, 0);
  for (let i = 1; i < arr.length; ++i) {
    for (let j = arr.length; j > 0; --j) {
      if (i === j) {
        break;
      }
      const total = arr.slice(i, j).reduce((a, b) => { return a + b; }, 0);
      if (total > output) {
        output = total;
      }
    }
  }
  return output;
}

module.exports = maxSubarray;
