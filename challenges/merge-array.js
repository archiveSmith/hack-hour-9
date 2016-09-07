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
  const outArr = [];
  const longestArr = arr1;
  const smallestArr = arr2;
  let counter = 0;

  if (arr1.length < arr2.length) {
    longestArr = arr2;
    smallestArr = arr1;
  }

  for (let i = 0; i < longestArr.length; i++) {
    for (let j = counter; j < smallestArr.length; j++) {
      if (longestArr[i] < smallestArr[j]) {
        outArr.push(longestArr[i]);
        break;
      } else {
        outArr.push(smallestArr[j]);
        counter++;
      }
    }
  }
  return outArr;
}

module.exports = mergeArrays;
