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
 	let up = 0;
 	let down = input.length;
 	while (up < down){
 		if(input[up] != '('){
 			up++
 		}
 			if(input[down] != ')'){
 			down--
 		}
 		if (input[up] === '(' && input[down] === ')'){
 		return true;
 	}
 }

 	return false;
 }
module.exports = balancedParens;
