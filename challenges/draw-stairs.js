/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  // n must be a positive integer between 1 and 100
  if (!Number.isInteger(n) || n < 1 || n > 100) return;

  // Iterate from 1 to n, drawing each level of the staircase
  // with the corresponding number of asterisks
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}


module.exports = drawStairs;
