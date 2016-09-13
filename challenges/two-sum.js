/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr[0]) return false;
  const sorted = arr.sort((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  if (min + min > n || max + max < n) return false;
  if (min === max) return false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === n) {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;
