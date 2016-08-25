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
			var numeral = "";
	var Ms = Math.floor(n / 1000);
	//don't know 5000, etc.
	if (Ms > 0){
		var Mstring = "M".repeat(Ms);
		numeral += Mstring;
		n -= (Ms*1000);
		}
	var cM = Math.floor(n/900);
	if (cM === 1){
		numeral += 'CM';
		n -= 900;
	}
	var Ds = Math.floor(n/500);
	if (Ds === 1){
		numeral += 'D';
		n -= 500;
	}
	var CD = Math.floor(n/400);
	if (CD === 1){
		numeral += 'CD';
		n -= 400;
	}
	var Cs = Math.floor(n/100);
	if(Cs > 0){
		numeral += 'C'.repeat(Cs);
		n -= Cs*100;
	}
	var XC = Math.floor(n/90);
	if (XC === 1){
		numeral += 'XC';
		n -= 90;
	}
	var L = Math.floor(n/50);
	if(L === 1){
		numeral += 'L';
		n -= 50;
	}
	var XL = Math.floor(n/40);
	if (XL === 1){
		numeral += 'XL';
		n -= 40;
	}
	var Xs = Math.floor(n/10);
	if(Xs > 0){
		numeral += 'X'.repeat(Xs);
		n -= 10 * Xs;
	}
	var IX = Math.floor(n/9);
	if(IX === 1){
		numeral += 'IX';
		n -= 9;
	}
	
	var Vs = Math.floor(n/5);
	if(Vs === 1){
		numeral += 'V';
		n -= 5;
	}
	var Vs = Math.floor(n/4);
	if(Vs === 1){
		numeral += 'IV';
		n -= 4;
	}
	var Is = Math.floor(n/1);
	if(Is > 0){
		numeral += 'I'.repeat(Is);
		n -= 1 * Is;
	}
	
	
	return numeral;

}

module.exports = romanNumeral;
