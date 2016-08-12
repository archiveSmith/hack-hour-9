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
	let rows = n;
	let stars = '';
	let output = '';
	
	for (let i = 0; i < rows; i++) {
		let spaces = '';
		stars += '*';		
		for(let j = rows; j > -1; j--) {
			spaces += '_';
			output = spaces + stars;
			spaces[0] = '';
		}
		console.log(output)
	}
}


module.exports = drawStairs;
