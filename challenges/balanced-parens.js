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
	var bStack = []; // keep track of open bracket encounters
	
	for(var index = 0; index < input.length; index++) {
		var ch = input.charAt(index);
		
		// check the char at index, if open bracket type, push on stack, 
		// if close bracket type that matches topmost char on stack, pop off stack
		// else return false
		switch(ch) {
			case '(':
			    bStack.push(ch);
				break;
			case ')':
				if(bStack.pop() !== '(') { // unbalanced
					return false;
				}
				break;
			case '[':
			    bStack.push(ch);
				break;
			case ']':
				if(bStack.pop() !== '[') { // unbalanced
					return false;
				}
				break;
			case '{':
			    bStack.push(ch);
				break;
			case '}':
				if(bStack.pop() !== '{') { // unbalanced
					return false;
				}
				break;
		}		
	}
	
	return (bStack.length > 0)? false : true;

}
/* tests */
/*
console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log('-----');

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log('-----');

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false
*/

module.exports = balancedParens;
