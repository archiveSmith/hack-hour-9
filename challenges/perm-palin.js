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
	let strArr = str.split('');
	let permArr = [];
  let usedChars = [];

	permute(strArr);

	function permute(input) {
	  var i, ch;
	  for (i = 0; i < input.length; i++) {
	    ch = input.splice(i, 1)[0];
	    usedChars.push(ch);
	    if (input.length == 0) {
	      permArr.push(usedChars.slice());
	    }
	    permute(input);
	    input.splice(i, 0, ch);
	    usedChars.pop();
	  }
	};
	return permArr;
}

console.log(permPalin('abab'));

module.exports = permPalin;
