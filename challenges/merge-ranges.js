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
  const newArr = [],
        sorted = arr.sort((a, b) => a[0] - b[0]);

  sorted.forEach(time => {
    const lastTime = newArr[newArr.length - 1];

    if (newArr.length === 0 || time[0] > lastTime[1]) {
      newArr.push(time);
    } else if (time[1] > lastTime[1]) {
      lastTime[1] = time[1];
    }
  });

  return newArr;
}


module.exports = mergeRanges;
