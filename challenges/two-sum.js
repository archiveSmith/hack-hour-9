/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Number.isInteger(n)) {
    console.log('undef')
    return undefined;
  };
  arr = arr.filter(isBigEnough);

  function isBigEnough(value) {
    return n >= value;
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }

  return false;
};

console.log(twoSum([2, 3, 4, 6, 25, 87, 4], 8));

module.exports = twoSum;