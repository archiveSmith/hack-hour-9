/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

<<<<<<< HEAD
 function binToDec(binary) {
   let deci = binary.split('').reverse().join('');
   let sum = 0;
   let base = 2;
   for ( let i = 0; i < deci.length; i++) {
     if (deci[i] >= '1') {
       sum += Math.pow(base,i);
     }
   }
   return sum;
 }
=======
function binToDec(binary) {

}
>>>>>>> 94415590ea5334c862271baa0964233cb24487ad

module.exports = binToDec;
