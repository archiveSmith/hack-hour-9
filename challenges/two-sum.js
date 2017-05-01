/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const diffs = {};
  let diff;
  for (let num of arr) {
    if (diffs[num]) return true
    diff = n - num;
    diffs[diff] = true;
  }
  return false;
}

module.exports = twoSum;
