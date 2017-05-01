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

// iterate from 1 to n
  // at each iteration:
  // # stars = index
  // # preceding blanks = n - index
  // no extra whitespace at beginning or end

function drawStairs(n) {
  n = (n > 100) ? 100 : n;
  let stairs = '';

  for (let i = 1; i <= n; i++) {
    let step = '';

    for (let j = 0; j < n - i; j++) {
      step += ' ';
    }

    for (let k = 0; k < i; k++) {
      step += '*';
    }

    if (i < n) step += '\n';
    stairs += step;
  }

  console.log(stairs);
}


module.exports = drawStairs;
