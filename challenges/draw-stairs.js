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
	"use strict";
	let i, j, str = "";
	for (j = 1; j <= n; j++) {
		str= "";
		for (i = 0; i < n-j; i++ ) {
			str += " ";
		}
		for (i = n-j; i < n; i++) {
			str += "*";
		}
		console.log(str);
	}	
}


module.exports = drawStairs;
