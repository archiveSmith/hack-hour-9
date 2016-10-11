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
	//only match parens, brackets, and curly braces
	var matched = input.match(/[\[\]\{\}\(\)]/g);	//already array

	//replace all sets of (), {} & [] with blanks
	matched = matched.join('').replace("()", '');
	matched = matched.replace("[]",'');
	matched = matched.replace("{}",'');
	
	//if there's an uneven number in the array, not every brace/bracket/paren is closing, so return false
	if (matched % 2 === 1) {
		
		return false;
	}

	//only loop through half the array
	var half = matched.length / 2;

	//target is the index that the indeces of matches should sum up to
	var target = matched.length - 1;
	for (var i = 0; i < half; i++) {
		//if the first half of the array starts with anything other than an opening paren, bracket, or brace, return false
		if (matched[i] !== "{" || matched[i] !== "(" || matched[i] !== "[") {
			return false;
		}
		//check for matches
		if (matched[i] === "{" && matched[target - i] !== "}") {
			return false;
		} else if (matched[i] === "(" && matched[target - i] !== ")") {
			return false;
		} else if (matched[i] === "[" && matched[target - i] !== "]") {
			return false;
		} else if (matched[i] === "'" && matched[target - i] !== "'") {
			return false;
		} 
	}
	return true;
}


module.exports = balancedParens;
