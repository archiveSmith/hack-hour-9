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
	let staircase = ""
	if(typeof n !== 'number'){
		staircase = "you didn't enter a number so here is a baby staircase: _-*"
		}
	else {
			
		for(let i = 1; i<=n; i++){
			let stair = "";
			let space = " ";
			let star = "*";
			stair += space.repeat(n-i) + star.repeat(i) + "\n";
			staircase += stair;
		}
	}
	console.log(staircase);
}


module.exports = drawStairs;
