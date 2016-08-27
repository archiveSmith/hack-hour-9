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
    let length = binary.length;
    let binArr = binary.split('');
    return binArr.reduce(function(prev, curr, index) {
        let digit = length - index;    
        if (curr === '1') {
            return prev + Math.pow(2, digit - 1);
        } else { 
            return prev;
        }
    }, 0);
}

module.exports = binToDec;

// function binToDec(binary) {
  // let length = binary.length;
  // let sum = 0;
  // for (let i = length - 1; i >= 0; i--) {
  //     let digit = length - i;
  //     if (binary[i] === '1') {
  //         sum += Math.pow(2, digit - 1)
  //     }
  // }
  // return sum;
// }