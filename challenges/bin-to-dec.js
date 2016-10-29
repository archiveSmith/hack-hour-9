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

 function binToDec(binary) {

   let binConv = [32, 16, 8, 4, 2, 1];
   let binAr = binary.split("");
   let index = 0, result = 0;

   	while (binAr.length < 6) {
   		binAr.unshift(0);
   	}

   	for(let i = 0; i < binAr.length; i++) {
   		if(binAr[i] == 1) {
   			result += binConv[i];
   		}
   	}

   return result;

 }

module.exports = binToDec;
