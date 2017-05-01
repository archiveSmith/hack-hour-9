/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	let romanNum = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
	let output = '';

		for (let rm in romanNum) {
			if (n >= romanNum[rm] && n > 0) {
				let numLetters = Math.floor(n / romanNum[rm]);
				for (let i = 0; i < numLetters; i++) {
				 	output += rm;
				}
			n = n%(romanNum[rm]);
			}
		}
	return output;
}

module.exports = romanNumeral;

// priority goes to largest denomination
// cycle from largest (M) to smallest (I) and calculate n / (Roman numeral)
// if n / (romanNumeral) >= 1, then we use the floored value to push that roman
// numeral that number of times to our output string. We continue with the
// division by updating our number with the remainder. proceed until our value is 0. 

