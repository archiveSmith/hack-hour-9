/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(arr) {
  let sorted = arr.sort(function(a, b) {
    return a[0] - b[0];
  });

  let newArr = [];

  for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] >= sorted[i + 1][0]) {
      newArr.push([(sorted[i][0]), sorted[i + 1][1]])
      i++
    } else {
      newArr.push(sorted[i]);
    }
  }
  return newArr
};

module.exports = mergeRanges;