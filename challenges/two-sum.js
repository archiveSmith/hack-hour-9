/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const firstNum = arr.shift();

  function recurse(num, restArr) {
    if (!restArr.length) {
      return false;
    }
    for (let i = 0; i < restArr.length; i++) {
      if (num + restArr[i] === n) return true;
    }
    const newNum = restArr.shift();
    return recurse(newNum, restArr);
  }

  return recurse(firstNum, arr);
}

console.log(twoSum([1,2,3,4], 8));

module.exports = twoSum;
