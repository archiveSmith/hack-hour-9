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
 	var roman = "";
 	var numArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
 	var letters = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
 	var current;
 	console.log(numArr);
 	for (var k = numArr.length -1 ; k >= 0; k--){
 		current = Math.floor(n/numArr[k]);
 		for (var i = 0; i < current; i++){
 			roman += letter[k];
 		}
 		n = n - current * numArr[k];
 	}
 	return roman;
 }


module.exports = romanNumeral;
