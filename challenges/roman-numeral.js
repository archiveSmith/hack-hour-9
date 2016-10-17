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
  var num = n;
  var numerals = {
                  1000: 'M', 900: 'CM',500: 'D', 400: 'CD',
                  100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X',
                  9: 'IV', 5: 'V', 4: 'IV', 1: 'I'
                }

  var outArr = [];

  while(num > 0){
    var lastKeyTried;
    for (var key in numerals){
      if (num - Number(key) >= 0){
        lastKeyTried = key;
      } if (num - Number(key) < 0){
        outArr.push(numerals[lastKeyTried]);

        num = num - Number(lastKeyTried)
        lastKeyTried = '';
      }
    }
  }
  return outArr.join('');
}

module.exports = romanNumeral;
