/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */
 //A much more efficient method is the Euclidean algorithm, which uses 
 // the observation that the gcd of two numbers also divides their difference.

//A slight change

//WHile
function gcd(a, b) {
	while (b !== 0) {
		var z = a % b;
		a = b;
		b = z;
	}
	return a;
}
	
//REcursive
// var gcd = function(a, b) {
//     if ( !b) {
//         return a;
//     }
//     return gcd(b, a % b);
// };
	

module.exports = gcd;