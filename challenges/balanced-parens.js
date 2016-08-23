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
	function balancedParens(input){
	let isOpen = ['{','[','('];
	let isClosed = ['}',']',')'];
	input = input.split('').filter(function(x){return (isOpen.indexOf(x) !== -1 || isClosed.indexOf(x) !== -1)});
	if (input.length %2 !== 0 || isOpen.indexOf(input[1]) !== -1) return false;
	
	for (var i = 0; i < input.length; i++){
		
		
	}
}

}

module.exports = balancedParens;
