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
	//match only letters & numbers and make it type insensitive
	var alphanum = str.match(/([A-Z0-9])+/gi).join('');
	
	//return true if only 1 character
	if (alphanum.length === 1) {
		return true;
	}
	//return true if any segment of 3 in alphanum is contained in the reversed
	var reversed = alphanum.split('').reverse().join('');
	for (var i = 0; i < str.length - 2; i++) {
		var perm = alphanum.slice(i,i+3);
		if (reversed.indexOf(perm) !== -1) {
			return true;
		}
	}
	return false;
}

module.exports = permPalin;