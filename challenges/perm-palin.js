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
if(str.length === 1) return true; 
let newObj = {};
for(let i = 0; i < str.length; i++) {
	if(newObj[str[i]]) {
		newObj[str[i]] += 1;
	} else {
		newObj[str[i]] = 1; 
	}
}
let pal = 0;
for(let prop in newObj) {
 if(newObj[prop] === 1) {
 	pal++;
 }
}
return pal > 1 ? false : true; 
}

module.exports = permPalin;