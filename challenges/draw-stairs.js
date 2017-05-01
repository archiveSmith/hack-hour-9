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
    //if n is greater than 1 and less than 100.
    if (n > 1 && n < 100) {
        //set spaces = n;
        var spaces = n;
        //create loop where i is equal to how many stars is to be logged. 
        //increase i while decreasing spaces
        for (var i = 1; i <= n; i++) {
            spaces--
            console.log(" ".repeat(spaces) + "*".repeat(i));
        }
    }


    return i
}


module.exports = drawStairs;
