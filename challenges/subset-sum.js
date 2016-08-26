/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// Idea for improving efficiency: Memoize the function.
// What do I need to remember in order to avoid duplication
// of effort?
// 
// Another idea: On each time through the for loop, shift off
// the first element of the array, because if we made it through
// that iteration, we've already tried every possible subset
// including that number.

function subsetSum(array, target) {
  // Argument type checking
  if (!Array.isArray(array)) return undefined;
  if (!array.every(item => typeof item === 'number')) return undefined;
  if (typeof target !== 'number') return undefined;
  if (Number.isNaN(target)) return undefined;
  if (!Number.isFinite(target)) return undefined;
  
  // Base cases: Either we've run out of numbers in the array,
  // or we've hit the target
  if (array.length === 0) return false;
  if (target === 0) return true;
  
  // Recursive case
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const arrayWithoutElement = Array.from(array)
    arrayWithoutElement.splice(i, 1);

    if (subsetSum(arrayWithoutElement, target - element)) {
      return true;
    }
  }

  return false;
}

module.exports = subsetSum;
