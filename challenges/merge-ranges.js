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
  const result = [];
  const start = [];
  const end = [];

  array.forEach((subArr) => {
    start.push(subArr[0]);
    end.push(subArr[1]);
  });
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  for (let i = 0; i < start.length; ++i) {
    const tempArr = [];
    tempArr.push(start[i]);
    if (end[i] < start[i + 1]) {
      tempArr.push(end[i]);
      result.push(tempArr);
    }
    if (end[i] >= start[i + 1]) {
      tempArr.push(end[i + 1]);
      result.push(tempArr);
      i++;
    }
  }
  return result;
}

module.exports = mergeRanges;
