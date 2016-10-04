/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  return Math.max(...range(1, arr.length).map(length => {
    return Math.max(...subarrays(arr, length).map(subarray => {
      return subarray.reduce((a, b) => a + b, 0);
    }));
  }));

  function subarrays(arr, length) {
    const result = [];

    for (let i = 0; i < arr.length - length + 1; i++) {
      result.push(arr.slice(i, i + length));
    }

    return result;
  }


  function range(start, stop) {
    const result = [];

    for (let i = start; i <= stop; i++) result.push(i);

    return result;
  }
}


console.log(maxSubarray([1, 2, 3, 4, 5]));
console.log(maxSubarray([1, 2, 3, 4, -5]));
console.log(maxSubarray([1, 2, -5, 3, 4]));

module.exports = maxSubarray;
