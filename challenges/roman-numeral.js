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
	var output = '';
	var remainder = 0;
	
	// the result of the division gives the # of symbols represented by division points
	// specific numbers 4, 5, 9 need to be handled uniquely		
	// the remainder of the division need to be handled again
	
	// the division points are 1000, 100, 10, 1
	var thousands = Math.floor(n / 1000);
	remainder = n % 1000;
	
	if(thousands > 0) {
		output += 'M'.repeat(thousands);
	}
	
	if(remainder > 0) { // there is a remainder
		var hundreds = Math.floor(remainder / 100);
		remainder = remainder % 100;
		
		if(hundreds > 0) {
			// translate 
			switch(hundreds) {
				case 1:
					output += 'C';
					break;
				case 2:
					output += 'CC';
					break;
				case 3:
					output += 'CCC';
					break;
				case 4: 
					output += 'CD';
					break;
				case 5: 
					output += 'D';
					break;
				case 6: 
					output += 'DC';
					break;
				case 7: 
					output += 'DCC';
					break;
				case 8: 
					output += 'DCCC';
					break;
				case 9: 
					output += 'CM';
					break;
			}
		}
		
		if(remainder > 0) { // there is remainder
			var tens = Math.floor(remainder / 10);
			remainder = remainder % 10;
			
			if(tens > 0) {
			// translate 
				switch(tens) {
					case 1:
						output += 'X';
						break;
					case 2:
						output += 'XX';
						break;
					case 3:
						output += 'XXX';
						break;
					case 4: 
						output += 'XL';
						break;
					case 5: 
						output += 'L';
						break;
					case 6: 
						output += 'LX';
						break;
					case 7: 
						output += 'LXX';
						break;
					case 8: 
						output += 'LXXX';
						break;
					case 9: 
						output += 'XC';
						break;
				}
			}
			
			if(remainder > 0) { // there is remainder
				var ones = remainder;
			
				if(ones > 0) {
				// translate 
					switch(ones) {
						case 1:
							output += 'I';
							break;
						case 2:
							output += 'II';
							break;
						case 3:
							output += 'III';
							break;
						case 4: 
							output += 'IV';
							break;
						case 5: 
							output += 'V';
							break;
						case 6: 
							output += 'VI';
							break;
						case 7: 
							output += 'VII';
							break;
						case 8: 
							output += 'VIII';
							break;
						case 9: 
							output += 'IX';
							break;
					}
				}
			}			
		}
	}
		
	return output;
}

/* tests */
/*
console.log(romanNumeral(1000));
console.log(romanNumeral(2000));
console.log(romanNumeral(1));
console.log(romanNumeral(3));
console.log(romanNumeral(4));
console.log(romanNumeral(5));
console.log(romanNumeral(7));
console.log(romanNumeral(9));
console.log(romanNumeral(10));
console.log(romanNumeral(30));
console.log(romanNumeral(40));
console.log(romanNumeral(50));
console.log(romanNumeral(70));
console.log(romanNumeral(90));
console.log(romanNumeral(100));
console.log(romanNumeral(300));
console.log(romanNumeral(400));
console.log(romanNumeral(500));
console.log(romanNumeral(700));
console.log(romanNumeral(900));
console.log(romanNumeral(1984));
console.log(romanNumeral(2005));
*/

module.exports = romanNumeral;
