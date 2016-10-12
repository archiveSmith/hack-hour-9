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
  let curLength = array.length;
  for (let i = array.length - 1; i > 0; i--) {
    let curItem = array[i - 1];
    delete array[i - 1];
    array.push(curItem);
  }
  return array;
}

let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(reverseInPlace(temp))

module.exports = reverseInPlace;