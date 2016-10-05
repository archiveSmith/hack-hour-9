/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15, 20, -5, 10])  -> 40
 *
 */

function maxSubarray(arr) {
  // iterate through array
  // create an array to store each array element as keys, and consectuve sums as an array of values

  const combos = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    combos.forEach((el, i) => {
      const sum = arr[i] + el;
      com
    });

    combos[combos.length] = [arr[i]];
  }

}

module.exports = maxSubarray;
