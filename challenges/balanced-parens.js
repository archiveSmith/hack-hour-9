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
	let arr = [];
	for(let i=0; i<input.length; i++){
		if(input[i] === '(' || '[' || '{' || ')' || ']' || '}'){
			arr.push(input[i]);
		}
	}
	console.log(arr);
	let front = arr.slice(0, arr.length/2);
	let back = arr.slice(arr.length/2);
	if(front.length !== back.length){
		return false;
	}
	for(let j=0, t=back.length-1; j<front.length; j++, t--){
		if(front[j] === '(' && back[t] === ')'){
			continue;
		}else if(front[j] === '[' && back[t] === ']'){
			continue;
		}else if(front[j] === '{' && back[t] === '}'){
			continue;
		}
		return false;
	}
	return true;
}

balancedParens('(');  
balancedParens('()'); 
balancedParens(')(');  
balancedParens('(())');

balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false

module.exports = balancedParens;


for(let i=0; i<input.length; i++){
		if(input[i] === '(' || '[' || '{'){
			if(close === 0){
				open++;
			}else{
				return false;
			}
		}else if(input[i] === ')' || ']' || '}'){
			close++;
		}
	}


	input.toArray()