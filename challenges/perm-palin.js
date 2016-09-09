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
  if (str.length === 1) return true;

  let letters = {};
  
  for (let i = 0; i < str.length; i++) {
  	if (letters[str[i]]) {
  	  	letters[str[i]] = letters[str[i]] + 1;
  	} else {
  	  letters[str[i]] = 1;	
  	}
  }
  
  let unmatched = 0;
  for (let key in letters) {
  	if (letters[key] === 1) {
  	  unmatched++;
  	}
  }
  
  if (unmatched > 1) {
  	return false;
  }
  return true;
} 

module.exports = permPalin;