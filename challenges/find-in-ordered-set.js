/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  console.log(arr.length);
  function checker(checkArr) {
    const check = Math.ceil(checkArr.length / 2);
    if (checkArr[check] > target) {
      return checkArr.slice(0, check);
    }
    return checkArr.slice(check);
  }
  if (arr[Math.ceil(arr.length / 2)] === target) {
    return true;
  }
  if (arr.length <= 1) {
    return false;
  }
  return findInOrderedSet(checker(arr), target);
}

// // test data
// var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  // -> true
// console.log(findInOrderedSet(nums, 2));  // -> false



module.exports = findInOrderedSet;
