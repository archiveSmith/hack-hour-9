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
<<<<<<< HEAD
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
=======
	
>>>>>>> 80473e5c0b7462e1035a846033e00517b3792b54
}

module.exports = permPalin;