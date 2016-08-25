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

function romanNumeral(n, res) {
	res = res || "";
	var dec = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	var obj = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IV",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		900: "CM",
		1000: "M"
	};
	
	//find the highest number in dec array that is equal to or smaller than number n
	//find its roman numeral in the obj and add that obj to res
	//subtract that value from n ,which is now the new n
	//repeat until n is 0
	
	if (n === 0) {
		return res;
	}

	for (var i = dec.length - 1; i > 0; i--) {
		if (dec[i] <= n) {
			res += obj[dec[i]];
			console.log("res: ", res);
			console.log(i, obj[dec[i]]);
			n = n - dec[i];
			console.log("n", n);
			return romanNumeral(n, res);
		}
	}

	// return res;
}
console.log(romanNumeral(8));

module.exports = romanNumeral;
