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
  let result = "";
  let space = " ";
  let star = "*";
  let line = "";
  let spaceCounter = n.length - 1; // n = 4 -> 3
  let starCounter = 1;

  for (let i = 1; i < n; i++) {
    while (i < n) {
      console.log('i', i);
      while (spaceCounter > 0) {
        line += space;
        spaceCounter--;
          while (starCounter < spaceCounter ) {
            line += star;
            starCounter++;
          }
      }
    }
    result += line;
  }
  console.log(result);
}


module.exports = drawStairs;
