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
  let digitString = n.toString();
  let digitIndex = digitString.length;
  let numeral = '';

  while (digitIndex > 0) {
    numeral += convertDigit(Number(digitString[digitIndex]), digitIndex);
    digitIndex--;
  }

  function convertDigit(d, i) {
    let one;
    let five;
    let converted;
    switch(i) {
      case 4: one = 'M';
              break;
      case 3: one = 'C';
              five = 'D';
              break;
      case 2: one = 'X';
              five = 'L';
              break;
      case 1: one = 'I';
              five = 'V';
              break;
    }

    switch(d) {
      case 1: converted = one; break;
      case 2: converted = one + one; break;
      case 3: converted = one + one + one; break;
      case 4: converted = one + five; break;
      case 5: converted = five; break;
      case 6: converted = five + one; break;
      case 7: converted = five + one + one; break;
      case 8: converted = five + one + one + one; break;
      case 9: converted = ''; break;
    }

    return converted;
  }  

  return numeral;
}

module.exports = romanNumeral;
