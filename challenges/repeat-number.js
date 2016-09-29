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

  let result = {};
  let numResult = Infinity;
  
  array.forEach((num) => {
  	if (!result[num]) {
  		result[num] = 1;
  	} else {
  		numResult = num;;
  	}
  });
  
  return numResult;  

}

module.exports = repeatNumbers;
