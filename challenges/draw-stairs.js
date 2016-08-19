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
  var stair = '';
  var space = n-1;
  var stars = 1;
  var spaceString = ' ';
  var starString = '*';

  for (var i = 0; i < n; i++) {
    for (var i = 0; i < space; i++) {
      spaceString += spaceString;
    }
    for (var i = 0; i < stars; i++) {
      starString += starString;
    }
    stair = spaceString + starString;
    console.log(stair);
    space--;
    stars++;
  }

}
drawStairs(10);

module.exports = drawStairs;
