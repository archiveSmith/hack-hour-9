/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	var openArr = ['[', '(', '{']
	var parenseArr = {'[':']','(':')','{':'}'};
	var result = [];

	for(let index = 0; index < input.length; index++){
		if(openArr.indexOf(input[index]) !== -1){
			result.push(input[index]);
		}
		else if(parenseArr[result[result.length-1]] !== input[index] ){
			return false;
		}
		else {
			result.pop();
		}
	}
	if(result.length === 0){
		return true;
	}
}

module.exports = balancedParens;
