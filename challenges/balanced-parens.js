/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false <-- why is it false?
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
	let curly = 0;
	let square = 0;
	let parens = 0;
	//keep track of last bracket opened -- should close before others.
	let lastOpened = [];


	for(let i = 0; i < input.length; i++){
		if(input.charAt(i) === '{'){
			curly ++;
			lastOpened.push('{')
		}
		if (input.charAt(i) === '}'){
			curly --;
			if (lastOpened.pop() !== '{'){
				return false;
			}
			
		}
		if(input.charAt(i) === '['){
			square ++;
			lastOpened.push('[');
		}
		if(input.charAt(i) === ']'){
			square --;
			if (lastOpened.pop() !== '['){
				return false;
			}
		}
		if (input.charAt(i)==='('){
			parens++;
			lastOpened.push('(');
		}
		if (input.charAt(i) === ')'){
			parens --
			if (lastOpened.pop() !== '('){
				return false;
			}
		}
		//at any point, if there are more closing brackets than opening, return false
		if(parens < 0 || square < 0 || curly < 0){
			return false;
		}
	}
	return true;
}

module.exports = balancedParens;
