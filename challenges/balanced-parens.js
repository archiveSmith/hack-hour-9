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

 // must start with ( and end with )
 // must always check that the number of left parens is greater than right, 
 // if equal, then if we see a right paren, return false
 // input is a string. 
 // test cases: 
 
function balancedParens(input){
	let numOpen = [0, 0, 0];
	let numClose = [0, 0, 0];
	const parenOpen = ['(','{','['];
	const parenClose = [')','}',']'];

	for (let i = 0; i < input.length; i++) {
		
		//check if adding a close paren to a balanced set of parens - need to change to count same type of paren only (note that counters use j and string index is i)
		for (let j = 0; j < 3; j++) {
			if (numOpen[j] === numClose[j] && input[i].indexOf(parenClose[j]) !== -1) 
				return false;
			
			// increment counter for open paren
			else if (input[i].indexOf(parenOpen[j]) !== -1) {
				numOpen[j]++;
				
					// increment counter for closed paren
			} else if (input[i].indexOf(parenClose[j]) !== -1) {
				let diff = [numOpen[0]-numClose[0], numOpen[1]-numClose[1], numOpen[2]-numClose[2]];
				diff.forEach(function(ele, index) {
					if (ele > 0 && index !== j) return false;
				});
				numClose[j]++;
			}
		}
	}

	return (numOpen[0] === numClose[0] && numOpen[1] === numClose[1] && numOpen[2] === numClose[2]);
}

module.exports = balancedParens;
