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
	var strarray = str.split('');
	//keep track of # of whether each character appears an even number of times (false) or an odd number (true)
	var strCollisions = {};
	for(let i = 0; i < strarray.length; i++){
		strCollisions[strarray[i]] = !strCollisions[strarray[i]];
	}
	//if more than ONE character is an odd number of times, return false
	//one character can have odd count. if more than one char is 'true' in collisions object, the string is not going to be a palindrome.
	var countTrue = 0;
	for(let k in strCollisions){
		console.log(k);
		if (strCollisions[k] === true){
			countTrue ++;
			console.log(countTrue);
		}
	}
	if (countTrue > 1){
			return false;
		}
		else return true;
}


module.exports = permPalin;