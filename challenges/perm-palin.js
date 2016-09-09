/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	//every number count should be even, only one can be odd
	let countObj = str.split('').reduce((cObj, char) => {
		cObj[char] = cObj[char] + 1 || 1;
		return cObj;
	}, {})

	let seenSingle = false;
	for (var char in countObj) {
		if (countObj[char] % 2 !== 0 && seenSingle) {
			return false;
		} else if (countObj[char] % 2 !== 0 && !seenSingle) {
			seenSingle = true;
		} 

	}
	return true;
}

module.exports = permPalin;