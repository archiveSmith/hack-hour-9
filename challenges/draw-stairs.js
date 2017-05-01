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
	let stars = '';

	for (let i = 0; i < n; i++) {
		let spaces = n - i;
		let tempSpaces = '';
		stars += '*';
		while(spaces > 1) {
			tempSpaces += ' ';
			spaces--;
		}		
		console.log(tempSpaces + stars)
	}
}


module.exports = drawStairs;
