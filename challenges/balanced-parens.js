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
	let begin = 0;
	let close = 0;
	let str = input.replace(/\w/gi, '')
	let check = str.split('');
	let keys = {'(' : ')', '{': '}', '[': ']' }
	for(let i = 0, end = check.length - 1 - i; i < check.length; i++) {
		check[i];
		for(check[i] in keys) {
			if(check[end] !== keys[check[i]]);
			return false;
		}
	}	
	return true;

}

module.exports = balancedParens;
