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
 	var sum = 0;
 	const BASE = 2;

 	var myStrArray = binary.split('').reverse();

 	for(var counter = 0; counter < myStrArray.length; counter++) {

 		sum += Math.pow(BASE, counter) * parseInt(myStrArray[counter], 10);
 	}

 	return sum;
}

module.exports = binToDec;
