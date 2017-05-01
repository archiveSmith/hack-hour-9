/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */
function reverseInPlace(array) {
  let len = array.length,
    mid = Math.floor(len / 2);
  if (typeof array[0] === 'number') {
    for (let i = 0; i < mid; i++) {
      array[i] = array[i] ^ array[len - (i + 1)];
      array[len - (i + 1)] = array[i] ^ array[len - (i + 1)];
      array[i] = array[i] ^ array[len - (i + 1)];
    }
  } else {
    for (let i = 0; i < mid; i++) {
      temp = array[i];
      array[i] = array[len - (i + 1)];
      array[len - (i + 1)] = temp;
    }
  }
  return array;
}


//function reverseInPlace(array) {
//  let len = array.length,
//    mirrorIndex;
//  for (let i = 0, mid = Math.floor(len / 2); i < mid; i++) {
//    mirrorIndex = len - (1 + i);
//    swap(i, mirrorIndex, array);
//  }
//  return array;
//
//  function swap(index1, index2, arr) {
//    let temp = arr[index1];
//    arr[index1] = arr[index2]
//    arr[index2] = temp;
//  }
//}


module.exports = reverseInPlace;