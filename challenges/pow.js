/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

let result = 1;

function pow(base, power) {
	if(power < 1){ return result };
	result = result * base;
	power--;
	pow(base, power);
}

module.exports = pow;
