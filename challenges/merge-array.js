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

// function mergeArrays(arr1, arr2) {
//   let results = [];
//   let i = 0, j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] >= arr2[j]) {
//       results[results.length] = arr2[j];
//       j++;
//     } else if (arr1[i] < arr2[j]) {
//       results[results.length] = arr1[i];
//       i++;
//     }
//   }
//   arr1.length - 1 > i ? results = results.concat(arr1.slice(i)) : (arr2.length - 1 < j ? null : results = results.concat(arr2.slice(j)));
//   return results;
// }
function mergeArrays(arr1, arr2) {
  let i = arr1.length - 1,
    j = arr2.length - 1,
    k = i + j + 1;
  while (k >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--
  }
  return arr1;
}




module.exports = mergeArrays;
