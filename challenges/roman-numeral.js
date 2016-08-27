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


  let numVal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var convStr = '';
  // iterate over numerical equivalents to roman numbers
  // if n is 543, for instance, we would get to 500, add the corresponding
  //romanChar to convStr, subtract 500, check for 43, get to 40, add XL,
  //subtract 40, now check for 3 and add three Is.  terminate the while loop and return convStr.
  // (✖﹏✖)
  for (let i = 0; i < numVal.length; ++i) {
    while (numVal[i] <= n) {
      convStr += romanNum[i];
      n -= numVal[i];
    }
  }

  return convStr;

}

function ramon(n){
  let table = {
    'M': 1000,
    'CM': 900,
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
  };
  
    let newRomanVal = '';
  for (var keys in table){
    while (table[keys] <= n){
    	newRomanVal += keys;
    	n -= table[keys];
    }
    
  }
  return newRomanVal;
}
}
module.exports = romanNumeral;

