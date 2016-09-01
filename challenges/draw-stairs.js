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

// console.log("a defined?" + (typeof a !== 'undefined'))
//console.log('hi')
function drawStairs(input){
	let numSteps = 0;
	let stars = 1;
	let spaces = input - stars; 
	let step = '';
	
	while(numSteps < input){
	
	for(let index = 0; index < spaces; index++){
		step += ' ';
	}
	for(let index = 0; index< stars; index++){
		step += '*'
	}
	step += "\n"
	stars++;
	numSteps++;
	spaces--;
	}
	console.log(step)
}


module.exports = drawStairs;
