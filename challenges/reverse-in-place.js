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
   const length = array.length;
   let counter = 1;
   const loop = Math.floor(length / 2);
   for (let i = 0; i < loop; i++) {
     const oldArray = array[i]
     array[i] = array[length-counter]
     array[length-counter] = oldArray;
     counter++;
   }
   return array;
 }

module.exports = reverseInPlace;
