/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	var res = 1;
	if (power === 1) {
		return base;
	} else if (power === 0) {
		return 1;
	} else if (power > 1){
		function recurse(){
			res = res * base;
			power--;
			while (power > 0) {
				return res* pow(base, power);
			}
			return res;
		}
		return recurse();
	} else {			//power is negative
		
		function recurse(){
			// console.log("power first", power);
			power = Math.abs(power);
			// console.log('power after: ', power);
			res = res * base;
			power--;
			while (power > 0) {
				return res* pow(base, power);
			}
			console.log("res: ", res);
			return res;
		}
		return recurse();
	}
}



module.exports = pow;
