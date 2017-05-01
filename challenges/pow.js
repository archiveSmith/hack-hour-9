/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


function pow(base, power) {
	//need to keep this consistent when recursing through function. not sure how. 
	let initialNum = base;
	let output = base * initialNum;
	while (power > 1){
		return pow(output, power-1)
	} 
	return output;
}

module.exports = pow;
