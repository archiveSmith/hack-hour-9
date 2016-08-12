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
  
  for (let i = "*"; i.length <= n; i += "*" ) {
    
    for (let j = " "; j >= 0; j--) {
      console.log(j + i);
    }
  }

}

// drawStairs(6);

module.exports = drawStairs;
