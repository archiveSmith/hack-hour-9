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
	var parensArr = ['[',']','(',')','{','}'];
	var freq = {};

	for(let index = 0; index < input.length; index++){
	//	console.log(input[index])
		let parense = input[index];
		if(parensArr.includes(parense)) {
			if(!freq[parense]){ freq[parense] = 1;}
			else{freq[parense]++}
		}
	}
	//console.log(freq)
	
	if(freq['['] !== freq[']'] || freq['('] !== freq[')'] || freq['{'] !== freq['}']){
		return false;
	}
	return true;
}

module.exports = balancedParens;
