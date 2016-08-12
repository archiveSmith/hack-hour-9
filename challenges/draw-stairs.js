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
	x = 1;
	let str = "";
	for (var x = 1; x <= n; x++) {		//this creates n number of rows of spaces and asterisks. there will always be n characters per row
		let w = n - x;					//w is number of spaces in each row
		let a = 1;
		while (a <= w ) {		//adds spaces
			str += " ";
			a++;
		}
		let star = 1;
		let z = x;
		while (star <= z) {		//adds asterisks	
			str += "*";			//star is number of asterisks in each row
			star++;
		}
		str += "\n"			//enters new line
	};
	return str;
	//first line has n-x spaces and x asterisk, put it in a string
	//increase x by 1
	//second line has n-x spaces and x asterisks 
	//repeat until x = n;


}


module.exports = drawStairs;
