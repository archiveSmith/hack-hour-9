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
  let newArr = [];
  if (arr1.length < arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] <= arr2[i]) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
      } else {
        newArr.push(arr2[i]);
        newArr.push(arr1[i]);
      }
    }
    arr2 = arr2.slice(arr1.length);
    newArr = newArr.concat(arr2);
  } else {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] <= arr2[i]) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
      } else {
        newArr.push(arr2[i]);
        newArr.push(arr1[i]);
      }
    }
    arr1 = arr1.slice(arr2.length);
    newArr = newArr.concat(arr1);
  }
  return newArr;
}

module.exports = mergeArrays;
