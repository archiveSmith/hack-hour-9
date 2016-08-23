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
	//getting all parens
	let allParens = [];
	let allBrackets = [];
	let allMustaches = [];
	let allChars = [];
	input = input.split("");
	for (let i = 0; i < input.length; i++) {
		if (input[i] === '(' || input[i] === ')') {
			allParens.push(input[i]);
			allChars.push(input[i]);
		} else if (input[i] === '{' || input[i] === '}') {
			allMustaches.push(input[i]);
			allChars.push(input[i]);
		} else if (input[i] === '[' || input[i] === ']') {
			allBrackets.push(input[i]);
			allChars.push(input[i]);
		}
	}
	
	if (allParens.length === 1) return false;
	if (allBrackets.length === 1) return false;
	if (allMustaches.length === 1) return false;
	
	for (let i = 0; i < Math.floor(allParens.length/2); i++) {
		if (allParens[allParens.length - i - 1] !== ')'){
			return false;
		}
	}
	for (let i = 0; i < Math.floor(allBrackets.length/2); i++) {
		if (allBrackets[allBrackets.length - i - 1] !== ']'){
			return false;
		}
	}
	for (let i = 0; i < Math.floor(allMustaches.length/2); i++) {
		if (allMustaches[allMustaches.length - i - 1] !== '}'){
			return false;
		}
	}
	
	return true;

}

module.exports = balancedParens;
