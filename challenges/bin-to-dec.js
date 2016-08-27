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

	var bin = [256, 128, 64, 32, 16, 8, 4, 2, 1];
	
	while (binary.length < 9) {
		binary = '0' + binary;
	}
	
	var sum = 0;
	
	for (var i = 0; i < binary.length; i++) {
		binary[i] === '1' ? sum += bin[i] : sum;
	}
	
	return sum;
}

function decToBin(decimal) {
	var bin = [256, 128, 64, 32, 16, 8, 4, 2, 1];
	
	while (decimal > bin[0]) {
		bin.unshift(bin[0] * 2);
	}
	
	var copy = [];

	for (var i = 0; i < bin.length; i++) {
		if (decimal >= bin[i] && decimal > 0) {
			copy.push('1');
			decimal -= bin[i];
		} else {
			copy.push('0');
		}

	}
	return copy.join('');
}

module.exports = binToDec;
