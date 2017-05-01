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
    //split the binary in to array and rev. 
    let biArr = binary.split("").reverse();
    let ans = 0
    //find the exponent value for each item in the array and add to new array. 
    for (var i = 0; i < biArr.length; i++) {
        if (eval(biArr[i]) === 1) {
            //update ans
            ans += Math.pow(2, i)
        }
    }
    return ans;
}

module.exports = binToDec;
