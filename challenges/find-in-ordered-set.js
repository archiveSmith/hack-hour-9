/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time


findInOrderedSet(nums, 2);  -> false

 */



function findInOrderedSet(arr, target) { 
  if (arr.length === 1) {
    if (arr[0] = target) return target;
    return;
  }
  
  return findInOrderedSet(arr.slice(0, arr.length / 2), target)
  var right = findInOrderedSet(arr.slice(arr.length / 2, arr.length), target)

  // console.log(left)
  // console.log(right)
  // // findInOrderedSet  
  // array.slice(0, array.length/2)
      
}

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);//  -> true

module.exports = findInOrderedSet;
