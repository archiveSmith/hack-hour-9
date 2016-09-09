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
 	str = str.toLowerCase();
 	let storage = {};
 	
 	for (let i = 0; i < str.length; i++ ) {
 		if(!storage[str[i]]) {
 			storage[str[i]] = 1;
 		} else {
 			storage[str[i]]++;
 		}
 	}
 	
 	let counter = 0;
 	
 	for (let key in storage) {
 		if(storage[key] % 2 === 1) {
 			counter++;
 		}
 	}
 	return counter > 1 ? false : true;
 	
 	
  }

module.exports = permPalin;