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
  const digitString = n.toString();
  const iterations = (digitString.length > 3) ? 4 : digitString.length;
  let numeral = '';

  const one = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IV'];
  const ten = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'CX'];
  const hun = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tho = ['', 'M'];

  for (let i = iterations - 1; i >= 0; i--) {
    if (i === 3) {
      const thoDigits = digitString.slice(0, digitString.length - 4);
      for (let j = 0; j < thoDigits; j++) {
        numeral += tho[1];
      }
    } else {
      const digit = Number(digitString[i]);
      if (i === 2) numeral += hun[digit];
      if (i === 1) numeral += ten[digit];
      if (i === 0) numeral += one[digit];
    }
  }

  return numeral;
}

module.exports = romanNumeral;
