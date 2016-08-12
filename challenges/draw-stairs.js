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
  var i;
  var str = '';
  for (i = 0;i < n;i++){
    str += '*';
    console.log(str);
    for (var j = n-1;j > 0;j--){
      str += ' ';
    }

  }
  console.log(str);

}


module.exports = drawStairs;
