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
		console.log(c,d,n);
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

gcd(8,8);

//get all prime factors, then the intersection has the GCD
//start with prime factors for one of them
//loop thru from 2 to a, 

function primeFactors(a) {
	let n = a.length;
	for (let i = 0; i < n/; i++) {

	}
}

module.exports = gcd;