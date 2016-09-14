/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Number.isInteger(n)) {
    return undefined;
  };

  // for (var i = 0; i < arr.length; i++) {
  //   for (var j = 0; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === n) {
  //       return true;
  //     };
  //   };
  // };

  arr = arr.sort(function(a, b) {
    return a - b;
  })

  let counterStart = 0;
  let counterEnd = arr.length;

  while (counterStart !== counterEnd) {
    if (arr[counterStart] + arr[counterEnd] === n) {
      return true
    }
    if (arr[counterStart] + arr[counterEnd] > n) {
      console.log('too big')
      counterEnd--
    }

    if (arr[counterStart] + arr[counterEnd] < n) {
      counterStart--
    }
  }

  return false;
};

console.log(twoSum([2, 3, 4, 6, 25, 87, 4], 4));

module.exports = twoSum;