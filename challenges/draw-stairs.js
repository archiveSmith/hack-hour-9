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
  var outStr = '';
  
  for (var i = 1;i <= n;i++){
    var starCounter = i;
    var spaceCounter = n;
    
    while(spaceCounter-i > 0){
      outStr += ' ';
      spaceCounter--;
    }
    
    while(starCounter > 0){
      outStr += '*';
      starCounter--;
    }
    
    outStr += '\n';
  }
}

module.exports = drawStairs;
