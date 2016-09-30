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
  let hash = {};

  array.forEach(function(element, index, array) {
    hash[element] === undefined ? hash[element] = 1 : hash[element]++
  });

  for (var key in hash) {
    if (hash[key] >= 2) {
      return hash[key];
    };
  };

};

console.log(repeatNumbers([1, 3, 4, 7, 3, 9]));

module.exports = repeatNumbers;