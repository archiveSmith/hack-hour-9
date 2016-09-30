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


function mergeRanges(ranges) {
  var result = [];
  ranges.sort(function (a, b) {
    return a[0] - b[0];
  })

  ranges.forEach(function (r) {
    if (!result.length || r[0] > result[result.length - 1][1])
      result.push(r);
    else
      result[result.length - 1][1] = r[1];
  });

  return result;

}


module.exports = mergeRanges;
