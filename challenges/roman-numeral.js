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
  let roman = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
    100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
  };
  let previousKey, value = '';

  while (n > 0) {
    for (let key in roman) {
      if (n == key) {
        value += roman[key];
        n = n - key;
        break;
      } else if (key > n) {
        n = n - previousKey;
        value += roman[previousKey];
        previousKey = 1;
        break;
      } else if (key === '1000') {
        n = n - key;
        value += roman[key];
        break;
      } else {
        previousKey = key;
      }
    }
  }
  return value;
}

module.exports = romanNumeral;
