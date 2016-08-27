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
	let choice = {1000:'M', 900: 'CM', 500:'D', 400:'CD', 100:'C', 90: 'XC', 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4: 'IV', 1:'I'}
	let answer = '';

	
	while(n > 0) {
		if(n - 1000 >= 0) {
				answer += choice[1000];
				n -= 1000;
		} else if (n - 900 >= 0) {
			answer += choice[900];
			n -= 900; 
		} else if (n - 500 >= 0) {
				answer += choice[500];
				n -= 500;
		} else if (n - 400 >= 0) {
			answer += choice[400];
			n -= 400;
		} else if (n - 100 >= 0) {
				answer += choice[100];
				n -= 100;
		} else if (n - 90 >= 0) {
			answer += choice[90];
			n -= 90;
		} else if (n - 50 >= 0) {
				answer += choice[50];
				n -= 50;
		} else if (n - 40 >= 0) {
			answer += choice[40];
			n -= 40;
		} else if (n - 10 >= 0) {
				answer += choice[10];
				n -= 10;
		} else if (n - 9 >= 0) {
			answer += choice[9];
			n -= 9;
		} else if (n - 5 >= 0) {
				answer += choice[5];
				n -= 5;
		} else if (n - 4 >= 0) {
			answer += choice[4];
			n -= 4;
		} else if (n - 1 >= 0) {
				answer += choice[1];
				n -= 1;
		}
	}

	return answer;
}

module.exports = romanNumeral;
