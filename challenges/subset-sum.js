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
// loop through the array, starting at the first value
  // loop through the array, and sum the first value with each of the elements
  // loop again, summing the first two values and summing with each of the other elements
  // continue adding elements and looping through the array
// if the first loop didn't pass, pop off the first element and add to the end, then repeat
  let values = array.slice();
  for (let i = 0; i < values.length; i++ ) {
    if (values[0] === target) return true;
    for (let j = 1; j < values.length) {
      
    }
    
  }


}

module.exports = subsetSum;
