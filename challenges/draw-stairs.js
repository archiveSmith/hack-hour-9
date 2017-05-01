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
  if (n >= 1 && n <= 100) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array[i] = '*';
    }
    for (let j = 0; j < array.length; j++) {
      let f = ' ';
      console.log(f.repeat(array.length - (j + 1)) + '*'.repeat(j + 1));
    }
  }
}


module.exports = drawStairs;