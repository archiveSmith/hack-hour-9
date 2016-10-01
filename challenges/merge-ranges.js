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


function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][1] >= array[i + 1][0]) {
      if (array[i][1] <= array[i + 1][1]) {
        array.splice(i, 2, [array[i][0], array[i + 1][1]]);
        i--;
      } else {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
}

module.exports = mergeRanges;
