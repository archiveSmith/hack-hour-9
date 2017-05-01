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
	let ray = str.split('').sort();
	
	for(let i = 0; i < ray.length - 1; i ++) {
		if(ray[i] === ray[i + 1]) {
			ray.splice(i, 2);
			i -= 1
		}
	}
	
	return ray.length <= 1
	
}


module.exports = permPalin;