/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// function repeatNumbers(array) {
//   const store = {};
//   for (let i = 0; i < array.length; i++) {
//     if (store[array[i]]) return array[i];
//     store[array[i]] = true;
//   }
// }
function repeatNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
  	sum += array[i];
  	sum -= i + 1;
  	if (sum !== 0) return array[i];
  }
}

module.exports = repeatNumbers;
