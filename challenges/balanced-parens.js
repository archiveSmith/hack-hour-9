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

 //Misunderstood prompt

function balancedParens(input){
let leftPar = 0;
let rightPar = 0;
let leftBra = 0;
let rightBra = 0;
let leftCur = 0;
let rightCur = 0;

let index = 0;
while(index < input.length) {
	
	if(input[index] === "(") leftPar++;
	else if(input[index] === ")") rightPar++;
	else if(input[index] === "[") leftBra++;
	else if(input[index] === "]") rightBra++;
	else if(input[index] === "{") leftCur++;
	else if(input[index] === "}") rightCur++;
	
	index++; 
}
return (leftPar === rightPar) && (leftBra === rightBra) && (leftCur === rightCur);

}

module.exports = balancedParens;
