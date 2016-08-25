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


//546
//'DII'
//543
// points of change: 3-4, 8-9 

//refactor

function r(n) {
  let numerals = {
    "M": 1000,
    "CM": 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let romStr = '';
  for (let i in numerals) {
    while (n >= numerals[i]) {
      n -= numerals[i]
      romStr += i;
    }
  }
  return romStr;
}






//function romanNumeral(n) {
//  if(typeof n !== 'number' || typeof parseInt(n) !== 'number') {
//    throw new Error('please enter positive integer');
//  } else {
//    let str = JSON.stringify(n), romStr = '';
//    let num;
//	    for (let i = str.length-1, pow = 0; i >= 0; i--, pow++) {
//	      num = parseInt(str[i]);
//	      if (num <=3) {
//	        romStr = numerals[Math.pow(10,pow)].repeat(num) + romStr;  
//	      } else if (num === 4) {
//            romStr = romStr + numerals[Math.pow(10,pow)]
//          } else if (num >4 && num<9) {
//            romStr = romStr + (numerals[5*Math.pow(10,pow)] + numerals[(num-5)*(Math.pow(10,pow))].repeat(num-5);
//          } else {
//            
//          }
//	    }
//	return romStr;
//  }
//}

module.exports = romanNumeral;