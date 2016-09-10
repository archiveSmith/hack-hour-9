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


//I misunderstood the question the first time. Permutation means any combination using all the letters must be able to be rearranged into a palindrome.
function permPalin(str) {
	//match only letters & numbers and make it type insensitive
	var alphanum = str.match(/([A-Z0-9])+/gi).join('').split('');
	
	//count frequency of each character
	var obj = {};
	var oddCounter = 0;
	for (var i = 0; i < alphanum.length; i++) {
		if (obj[alphanum[i]] === undefined) {
			obj[alphanum[i]] = 1;
		} else {
			obj[alphanum[i]]++;
		}
	}
	//count the amount of times a frequency is odd
	for (var key in obj) {
		if (obj[key] % 2 !== 0) {
			oddCounter++;
		}
	}
	//if more than 1 character has an odd frequency, a palindrome can't be made
	return oddCounter > 1 ? false : true;
}

module.exports = permPalin;