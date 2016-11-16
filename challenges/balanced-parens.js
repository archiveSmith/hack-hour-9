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

function brackets (str) {
	let arr = [];
	for (let i = 0 ; i < str.length; i++){
		if (str[i] === '(' || str[i] === '[' || str[i] === '{'){
			arr.push(str[i])
		} else if (str[i] === ')' || str[i] === '}' || str[i] === ']'){
			if (arr.length === 0){
				return false
			}
			if(str[i].charCodeAt(0) - arr[arr.length-1].charCodeAt(0) !== 2){
				return false
			}
			arr.pop();
		}
	}
	return arr.length === 0
}
 
//  Hack Hour Solution:
//  function balancedParens(input){
//   var open = '';

//   const symbols = input.match(/[\[|\]|(|)|{|}]/g) || [];

//   for (let i = 0; i < input.length; i++) {
//     if (/[\[|\(|{]/.test(input[i])) open = input[i] + open;
//     else if (/[\]|\)|}]/.test(input[i])) {
//       if (input[i].charCodeAt(0) - open.charCodeAt(0) > 2) {
//         return false;
//       } else {
//         open = open.slice(1);
//       }
//     }
//   }
//   //  If there are any openSyms left unclosed, parens are not balanced
//   return !open;
// }
module.exports = balancedParens;
