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
  const asterisks = '*';
  const whitespace = ' ';
  
  // check for n out of bounds
  if(n < 1 || n > 100) {
	  return false;
  }
  
  // iterate from 1 to n inclusive
  for(var i = 1; i <= n; i++) {
	  var numSpaces = n - i; // calculate # of spaces needed on left
	  var numAsterisks = n  - numSpaces; // calculate # of asterisks needed on right
	  
	  // use String built in repeat function for building repeated spaces and asterisks
	  var output = whitespace.repeat(numSpaces) + asterisks.repeat(numAsterisks); 
	  
	  console.log(output);
	  
  }
  
  return true;
    
}

/* test cases */
//drawStairs(6);
//drawStairs(-2);
//drawStairs(100);
//drawStairs(1);
//drawStairs(101);

module.exports = drawStairs;
