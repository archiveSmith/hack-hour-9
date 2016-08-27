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
<<<<<<< HEAD
 *
 */

 function romanNumeral(n) {
   let table = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   let roman = '';
  for (let key in table) {
     while ( n >= table[key] ) {
       roman += key;
       n -= table[key]
     }
  }
   return roman;
 }
=======
 * 
 */

function romanNumeral(n) {

}
>>>>>>> fe3e3df06b6e46ead25eacbc0147272d35d0bee6

module.exports = romanNumeral;
