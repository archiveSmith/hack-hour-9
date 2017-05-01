/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  // Base case
  if (target === 0) return true;
  if (array.length === 0) return false;

  // Recursive case
  const nextArr = array.slice(1);
  return subsetSum(nextArr, target - array[0])
    || subsetSum(nextArr, target);
}

module.exports = subsetSum;


// Pseudocode

// base case:
  // if target is zero, return true
  // if array is empty, there's no more possibilities. Return false

// recursive case:
  // check if we take the first number
  // check if we don't take the first number
  // return true  if any of them returns true; return false otherwise
