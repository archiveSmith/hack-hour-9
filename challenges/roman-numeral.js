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
//if n <= 0
if(n <= 0) {
	return 0;
}
//Create conversion objects where the properties are romans numerals
let conversion = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
let result = "";
 
//Loop through n with the highest conversion to the smallest
//Add to the string each conversion if available and then subtract that Number
//To get to the new number and repeat the process
for(let prop in conversion) {
	while (n >= conversion[prop]) {
		result += prop;
		n -= conversion[prop]; 
	}
}
return result; 
}

module.exports = romanNumeral;
