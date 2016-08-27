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
	let romanNums = {1: "I", 4: "IV", 5: "V", 9:"IX", 10:"X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"};
	let stringN = JSON.stringify(n);
	let arrayN = stringN.split("");
	let nums = [];
	let returnString = '';
	for (let i = 0; i < arrayN.length; i++) {
		let num = arrayN[i];
		for (let j = i; j < arrayN.length-1; j++) {
			num += '0';
		}
		nums.push(num);
	}
	for (let i = 0; i < nums.length; i++) {
		let romanToAdd = '';
		if (romanNums[nums[i]]) {
			romanToAdd = romanNums[nums[i]];
			returnString += romanToAdd;
		} else {
			let numCharsToAdd = nums[i].length;
			let charToAdd =  '';//JSON.stringify(Number(nums[i]) / nums[i].length)
			if (numCharsToAdd === 1) {
				charToAdd = '1';
			} else if (numCharsToAdd === 2) {
				charToAdd = '10';
			} else if (numCharsToAdd === 3) {
				charToAdd = '100';
			} else if (numCharsToAdd === 4) {
				charToAdd = '1000';
			}
			for (let j = 0; j < Number(nums[i][0]) ; j++) {
				returnString += romanNums[charToAdd];
			}
		}
		
		
	}
	return returnString;
}

module.exports = romanNumeral;
