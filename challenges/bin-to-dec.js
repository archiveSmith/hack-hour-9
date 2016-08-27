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
  if (typeof binary !== "string") return undefined;
  if (binary.length < 1) return undefined;
  if(!binary.split("").every((digit) => digit === "0" || digit === "1")) {
    return undefined
  }
  
  const len = binary.length;
  
  return binary.split('').map(Number).reduce((acc, next, i) => {
    return acc + next * Math.pow(2, len - 1 - i);
  }, 0);
}

module.exports = binToDec;
