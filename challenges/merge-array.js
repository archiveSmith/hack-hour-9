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

function mergeArrays(arr1, arr2) {
  const array1 = arr1.slice();
  const array2 = arr2.slice();
  let merged = [];

  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) merged.push(array1.shift());
    else merged.push(array2.shift());
  }

  merged = array1.length ? merged.concat(array1) : merged.concat(array2);

  return merged;
}

module.exports = mergeArrays;
