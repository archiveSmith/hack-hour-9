// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	// split the string into an array by separator white space and punctuation
		// replace all non alphanumeric chars with space
		// then split on all space char
	const punctuation = /[!"\#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/g;
	var newStr = str.replace(punctuation, ' ');
	newStr = newStr.toLowerCase(); // translate element to lowercase	
	var strArray = newStr.split(/\s/);
	
	// stack to keep track of open statements
	var myStack = [];
	
	// iterate through array of words
	for(var i = 0; i < strArray.length; i++) {
		var word = strArray[i];
		
		if(word === '') { // empty word, just continue
			continue;
		} else {
			// if stack empty then just push onto stack
			if(myStack.length === 0) {
				myStack.push(word);
			} else { // if stack not empty, pop top element and compare with current element in reverse
				var topWord = myStack.pop();
				var currWordReversed = word.split('').reverse().join('');
				
				//no match, push popped element back on stack, push current element on stack, else continue
				if(topWord !== currWordReversed) {
					myStack.push(topWord);
					myStack.push(word);
				}
			}
		}
		
	}
	
	// if stack length > 0, return false, else true
	return myStack.length === 0 ? true : false;
	
}

/* tests */
/*
console.log(matchWord('__END_DNE-----')); //  -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
console.log(matchWord(''));  //-> true
*/

module.exports = matchWord;
