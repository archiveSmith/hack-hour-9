/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	let result = base;
	while(power > 1) {
		result *= base;
		power--;
	}
	return result;
}

module.exports = pow;
