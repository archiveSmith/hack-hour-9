/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let hash = [];
  let counter = 0;
  let count2
  while (counter < arr.length) {
    count2 = counter
    while (count2 <= arr.length) {
      hash.push(arr.slice(counter, count2))
      count2++;
    }
    counter++;
  }
  let outputArr = []
  for (var i = 0; i < hash.length; i++) {
    if (hash[i].length > 0) {
      outputArr.push(hash[i].reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      }));
    }
  };
  outputArr = outputArr.sort()

  return outputArr[outputArr.length - 1];
}

// console.log(maxSubarray([1, -2, 3]));
console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;