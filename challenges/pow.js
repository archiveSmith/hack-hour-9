/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

<<<<<<< HEAD
 function pow(base, power) {
   if (base === 0) {
     return 0;
   }
   if (power === 0) {
     return 1;
   }
   return base * pow(base, power - 1);
 }
=======
function pow(base, power) {

}
>>>>>>> 89bab7e3c8f97be2dbced44544de14830f9d7521

module.exports = pow;
