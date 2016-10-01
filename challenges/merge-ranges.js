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
  let len = array.length,
    cur = array;
  while (true) {
    cur = combine(cur);
    if (cur.length === len) break;
    len = cur.length;
  }
  return cur;

  function combine(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.concat(combineRanges(arr[i], arr[i + 1]));
    }
    return result;
  }


  function combineRanges(r1, r2) {
    //[1,5], [0,8]
    if (((r1[0] >= r2[0]) && (r1[0] <= r2[1])) || ((r1[1] <= r2[1]) && (r1[1] >= r2[0]))) {
      return [Math.min(r1[0], r2[0]), Math.max(r1[1], r2[1])];
    }
    else {
      return r1, r2;
    }
  }
}

module.exports = mergeRanges;
