/* Write a function that console logs a staircase of any given height where .
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
//if (!(1 <= n <= 100)){console.log('staircase must exist between 1-100, please try again'); return false;}
var staircase = [];
for (var i = 0; i < n; i++){
		staircase.push('*');
		}
for (var i = n; i >= 0; i--){
	var output = '';
	var spaces = staircase.length - i;
	while(spaces > 0){
		output+=' ';
		spaces--;
	}
	output+=staircase.slice(i);
	console.log(output);

}
console.log(staircase);}
console.log(drawStairs(6));

module.exports = drawStairs;
