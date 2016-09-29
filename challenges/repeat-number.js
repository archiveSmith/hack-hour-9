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
 	const arraySum = array.reduce((a, b) => a + b);
 	const sum1ToN = (array.length - 1) * array.length / 2;
  return arraySum - sum1ToN;
 }

module.exports = repeatNumbers;
