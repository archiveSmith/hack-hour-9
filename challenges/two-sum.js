/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// brute force, lower space complexity
// function twoSum(arr, n) {
//   if (typeof n !== 'number') {
//     return undefined;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// better time complexity, higher space complexity
function twoSum(arr, n) {
  const arrHash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!arrHash) {
      arrHash[arr[i]] = i;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arrHash[n - arr[j]]) {
      return true;
    }
  }
  return false;
}

// test data
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// twoSum(nums, 10)

module.exports = twoSum;
