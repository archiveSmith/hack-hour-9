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
  //one liner -> return parseInt(binary, 2);

  let split = binary.split("");
  let result = 0;
  let index = 1;

  for (let i = split.length-1; i >= 0; i--){
    result += parseInt(index * split[i]);
    index = index*2;
  }
  return result;
}

console.log(binToDec('100'));

module.exports = binToDec;
