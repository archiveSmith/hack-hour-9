/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (Number.isInteger(n)) {
    return undefined;
  };
  arr = arr.filter(isBigEnough);

  function isBigEnough(value) {
    return n >= value;
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }

  return false;
};

console.log(twoSum([2, 3, 4, 6, 25, 87, 4], 15));

module.exports = twoSum;