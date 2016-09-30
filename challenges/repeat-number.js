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
  let output;
  array.sort((a, b) => {
    if (a === b) {
      output = a;
    }
    return a - b;
  });
  return output;
}


// let test = [1, 3, 2, 5, 4, 9, 7, 8, 1];
// repeatNumbers(test);

module.exports = repeatNumbers;
