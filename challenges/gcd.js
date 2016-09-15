/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let arr = [];

	function getPrimeFactors(c, d, n) {
		if (n > c || n > d) {
		} else if (c === 1 || d === 1) {
			arr.push(1);
		} else {
			for (let i = n; i < Math.min(a, b); i++){
				if (c%i === 0 && d%i === 0) {
					arr.push(i);
					getPrimeFactors(c/i, d/i, i);
					break;
				} 
			}
		}
	}
	getPrimeFactors(a, b, 2);
	return arr.reduce(function(prev,next){return prev*next;});
}


module.exports = gcd;