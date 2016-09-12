/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
<<<<<<< HEAD
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
=======
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
>>>>>>> 2e556a0baec063508f3b262f1d394d04e7eddaa5
 *
 */

function mergeArrays(arr1, arr2) {
<<<<<<< HEAD
  let merged = []
  let longest;
  if (arr1.length <= arr2.length) {
    longest = arr2
  } else {
    longest = arr1
  }

  for (let i = 0; i < longest.length; i++) {
    if (arr1[i] <= arr2[i]) {
      if (arr1[i]) {
        merged.push(arr1[i]);
      }
      if (arr2[i]) {
        merged.push(arr2[i]);
      }
    } else {
      if (arr2[i]) {
        merged.push(arr2[i]);
      }
      if (arr1[i]) {
        merged.push(arr1[i]);
      }
    }
  }
  return merged
=======

>>>>>>> 2e556a0baec063508f3b262f1d394d04e7eddaa5
}

module.exports = mergeArrays;
