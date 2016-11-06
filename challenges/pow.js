/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


function pow(base, power) {
	if (power === 1){
		return base * 1;
	}
	if(power < 1){
		return (1 / pow(base, Math.abs(power)))
	}
	
	power --;
	return base *= (pow(base,power));

}

module.exports = pow;
