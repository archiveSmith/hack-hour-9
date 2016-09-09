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
	var counts = {};
	var ch, len, index;
	var even = 0;
	var odd = 0;
	
	for (index = 0, len = str.length; index < len; ++index) {
    	ch = str.charAt(index);
    	counts[ch] = counts[ch] ? counts[ch] + 1 : 1;
	}
	
	for (ch in counts) {
	 	if(counts[ch] % 2 !== 0){
	 		odd++	
	 	}
	}
	
	if (odd > 1){
		return false
	}
	
	return true;
}

module.exports = permPalin;
