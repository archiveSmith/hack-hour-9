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

	//Iterate through full input string
	for(let index = 0; index < input.length; index++){
		//If the string Index is of  an open parense is not -1, then the letter is an open array, and we want to push it to the result arr
		if(openArr.indexOf(input[index]) !== -1){
			result.push(input[index]);
		}
		//Else we've encountered a closing bracket...and if it doesn't correspond to the open bracket last pushed, we have unbalance brackets. Return false
		else if(parenseArr[result[result.length-1]] !== input[index] ){
			return false;
		}
		//Else we've encountered a closing bracket...and it does correspond to the last pushed open bracket...so pop off open bracket
		else {
			result.pop();
		}
	}

	//Check at the end that we don't have any open brackets left (if the last letter is an open bracket)
	if(result.length === 0){
		return true;
	}
}

module.exports = balancedParens;
