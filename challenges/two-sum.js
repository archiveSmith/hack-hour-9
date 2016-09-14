/*  Given an array of numbers and a target number, return true if there are two numbers in the
=======
/*  Given an array of numbers and a target number, return true if there are two numbers in the
>>>>>>> abed993215e9f29d04f4b03654bac81ee75e358d
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;
