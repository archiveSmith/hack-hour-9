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
  const digits = [
    {value: 1, symbol: 'I'},
    {value: 4, symbol: 'IV'},
    {value: 5, symbol: 'V'},
    {value: 9, symbol: 'IX'},
    {value: 10, symbol: 'X'},
    {value: 40, symbol: 'XL'},
    {value: 50, symbol: 'L'},
    {value: 90, symbol: 'XC'},
    {value: 100, symbol: 'C'},
    {value: 400, symbol: 'CD'},
    {value: 500, symbol: 'D'},
    {value: 900, symbol: 'CM'},
    {value: 1000, symbol: 'M'}
  ]
 
  let currentTotal = 0;
  let result = '';
  
  while (currentTotal < n) {
    const indexOfTooLargeDigit = digits.findIndex(digit => {
      return digit.value > n - currentTotal;
    });
    const indexOfNextDigit = indexOfTooLargeDigit - 1;
    const nextDigit = digits[indexOfNextDigit];
    
    currentTotal += nextDigit.value;
    result += nextDigit.symbol;
  }
  
  return result;
}

module.exports = romanNumeral;
