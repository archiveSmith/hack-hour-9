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

function repeatNumbers(array = []) {
//return array.filter((num,idx,arr) => arr.indexOf(num) !== idx)[0];
const sorted = array.sort((a,b) => a - b);
for (let i = 0, len = array.length; i < len; i++){
  if (array[i] === array[i+1]){
    return array[i];
  }
}
}

module.exports = repeatNumbers;
