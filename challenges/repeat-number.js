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

function repeatNumbers(array) {
	const expected = ((array.length-1) * array.length) / 2;
  const actual = 0;
    
  for (var i = 0; i < array.length; i++) {
    actual += array[i];        
  }
  return actual - expected;
}
// console.log(repeatNumbers([1, 2, 3, 4, 6, 7, 8, 9, 6 12, ]));
module.exports = repeatNumbers;
