/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  
  while (leftIndex <= rightIndex) {
    let midArray = Math.floor((leftIndex + rightIndex) / 2);
    
    if (arr[midArray] > target) {
      rightIndex = midArray - 1;
    } else if (arr[midArray] < target) {
      leftIndex = midArray + 1;
    } else {
      return true;
    }
  }
  return false;
}


module.exports = findInOrderedSet;
