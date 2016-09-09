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
	//remove non-alphanumeric and lowercase
	let newStr = str.replace(/[^a-z0-9]/gi,'').toLowerCase();

	//iterate thru string and store to an object each char as a key and the freq as value
	let charFreq = {};
	for (let i = 0; i < newStr.length; i++) {
		if (charFreq[newStr[i]]) {
			charFreq[newStr[i]]++;
		} else {
			charFreq[newStr[i]] = 1;
		}
	}

	//iterate thru object and count the # of odd values
	//if there is either only 1 or 0 odds, then it can be a palindrome, return true.
	let numOdd = 0;
	for (let char in charFreq) {
		if (charFreq[char] % 2 === 1) {
			numOdd++;
		}
	}
	return (numOdd === 0 || numOdd === 1);
}

module.exports = permPalin;