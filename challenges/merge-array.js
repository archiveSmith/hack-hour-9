/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */

//  brute force
// function mergeArrays(arr1, arr2) {
//   if (arr1.constructor !== Array || arr2.constructor !== Array) {
//     return undefined;
//   }
//   return arr1.concat(arr2).sort((a, b) => a - b);
// }

//  recursive merge
function mergeArrays(arr1, arr2, output = []) {
  if (arr1.length === 0 && arr2.length === 0) {
    return output;
  } else if (arr1.length === 0) {
    return output.concat(arr2);
  } else if (arr2.length === 0) {
    return output.concat(arr1);
  }
  if (arr1[0] < arr2[0]) {
    output.push(arr1[0]);
    arr1.shift();
  } else {
    output.push(arr2[0]);
    arr2.shift();
  }
  return mergeArrays(arr1, arr2, output);
}

//  testing data
// let arr1 = [3, 4, 6, 10, 11, 15, 21];
// let arr2 = [1, 5, 8, 12, 14, 19];

//  mergeArrays(arr1, arr2);

module.exports = mergeArrays;
