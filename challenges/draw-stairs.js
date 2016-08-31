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

// console.log("a defined?" + (typeof a !== 'undefined'))

function drawStairs(levels){

	var stepperfuncwithclosure = makestep(6);
	var test = stepperfuncwithclosure(6);
	
	return test;
	
}

function makestep(steplength){
	
	var layer = 0;
	return function stepper(steplength){
			let stepStars = '';
			let stepSpace = '';
			for(let length = 0; length < steplength - layer; length++ ){
				
				stepStars += "*";
				console.log(stepStars)
			}
			for(let len = 5; len > 0; len--){
				stepSpace += "i";
				console.log(stepSpace)
			}
		
		
		layer++;
		return stepStars;
	}
	
}


module.exports = drawStairs;
