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
	let store = {};
	for(let i = 0; i < str.length; i++) {
		if(!store[str[i]]) {
			store[str[i]] = 1;	
		}else {
			delete store[str[i]];
		}
	}
	if(str.length % 2 === 0 && Object.keys(store).length === 0) return true;
	if(str.length % 2 !== 0 && Object.keys(store).length % 2 !== 0) return true;
	return false;
}

module.exports = permPalin;