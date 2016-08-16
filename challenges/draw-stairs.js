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
  var counter = n;
  
  
  for (var i = 0;i < n;i++){
    outStr += '*';
    while(counter-1){
      outStr += ' ';
    }
    
    outStr += '\n';
    counter--;
  }
  
  console.log(outStr);
}

console.log(drawStairs(5))


module.exports = drawStairs;
