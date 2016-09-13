/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // check for edge cases
  if(arr.length < 2 || Number.isNaN(n)) {
    return false;
  }

  // iterate to find all "pairs" in the array, check if the sum of a "pair" equals to the target value, if able to find match, immediately return true;  
  // after checking all "pairs", return false to indicate no match
  for(var i = 0; i < arr.length - 1; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

/* tests */
/*
var arr1 = [4,5,3,2,6];
console.log(twoSum(arr1, 11));
console.log(twoSum(arr1, 12));
console.log(twoSum([], 11));
console.log(twoSum([3], 11));
console.log(twoSum(arr1, 8));
*/

module.exports = twoSum;
