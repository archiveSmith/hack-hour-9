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
	let curVal = 1, total = 0;

	if (typeof binary !== 'string'){
		return undefined;
	} else if (binary.length === 1 && binary[0] === '0'){
		return 0;
	}
	for(let i = binary.length - 1; i >= 0; i--){
		if(binary[i] !== '1' && binary[i] !== '0'){
			return undefined;
		}
		if (binary[i] === '0'){
			curVal = curVal * 2;
		} else if( curVal === 1){
			total += curVal;
			curVal = curVal * 2;
		} else {
			total += curVal;
			curVal = curVal * 2;
		}
	}
	return total;
}

module.exports = binToDec;
