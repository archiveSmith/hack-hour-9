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
  let result = '';
  const romans = {
    M:1000,
    CD:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IV:9,
    V:5,
    IV:4,
    I:1,
  }

  if (n < 1) return -1;


  for (let i in romans) {
    while (n >= romans[i]) {
      console.log('begin', n, result, romans[i]);
      //adds to result the equivalent roman key
      result += i;
      n -= romans[i];
      console.log('end', n, result, romans[i]);
    }
  }
  return result;
}

module.exports = romanNumeral;
