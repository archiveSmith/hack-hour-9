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
  const totalLen = arr1.length + arr2.length;
  let output = [];
  let oneCount = 0;
  let twoCount = 0;
  while (output.length < totalLen) {
    if (arr1[oneCount] > arr2[twoCount] || oneCount + 1 > arr1.length) {
      output.push(arr2[twoCount])
      twoCount++
    } else {
      output.push(arr1[oneCount])
      oneCount++
    }
  }
  return output;
}


module.exports = mergeArrays;