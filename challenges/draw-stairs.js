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
	for(let i = 1; i <= n; i++){
		let row = ""
		let space = "";
		for (let j = i; j > 0; j--){
			row = row + '*';
		}
		for (let j = n - i; j > 0; j--){
			space = space + ' ';
		}
		console.log(space + row);
	}
}


module.exports = drawStairs;
