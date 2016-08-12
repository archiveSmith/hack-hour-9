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
"use strict"
function drawStairs(n) {
  let result = "";
  if (n === 0 || typeof n !== "number") return result;
  for (let i = 1; i <= n; i++) {
  	result += " ".repeat(n - i) + "*".repeat(i) + "\n";
  }
 return result;
}

module.exports = drawStairs;
