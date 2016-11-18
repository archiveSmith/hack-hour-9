/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an
 * array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

//grab each array inside of the array
//sort from smallest to largest range
// for each array check the first number compared to all the other numbers

function mergeRanges(array) {
  array = array.sort((a, b) => a[0] - b[0]);
  const result = [];
  for (let i = 0; i < array.length; i++) {
    console.log('new i = ', i);
    const curr = array[i];
    console.log('new curr = ', array[i]);
    const last = result[result.length - 1];
    console.log('new last = ', last);
    if (result.length > 0) {
      console.log('result has a length');
      if (curr[0] <= last[1]) {
        console.log('curr[0] <= last[1]');
        if (curr[1] > last[1]) {
          console.log('curr[1] > last[1]');
          console.log('last[1] = ', last[1], 'which is now = ', curr[1]);
          last[1] = curr[1];
        }
        console.log('hit continue');
        continue;
      }
    }
    console.log('pushing ', curr, ' onto result = ', result);
    result.push(curr);
  }
  return result;
}

// function mergeRanges(array) {
//   const sortedArr = array.sort((a, b) => a[0] - b[0]);
//   const outArr = [array[0]];
//
//   for (let i = 1; i < sortedArr.length; i++) {
//     if (sortedArr[i - 1][1] >= sortedArr[i][0]) {
//       const outNum = Math.max(sortedArr[i - 1][1], sortedArr[i][1]);
//       const tempArr = [].concat(sortedArr[i - 1][0], outNum);
//       outArr[outArr.length - 1] = tempArr;
//     } else {
//       outArr.push(sortedArr[i]);
//     }
//   }
//   return outArr;
// }

module.exports = mergeRanges;
