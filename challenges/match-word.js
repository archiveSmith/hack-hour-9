// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". 
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
let onlyWords = str.toLowerCase().match(/[a-z]+/gi,' ');
let stack = [];
//check for empty string
(!onlyWords) ? len = 0 : len = onlyWords.length;

for (let i = 0; i < len; i++){
	let rev = onlyWords[i].split('').reverse().join('');
	if (stack[stack.length-1] === rev){
		stack.pop();
	} else {
		stack.push(onlyWords[i]);
	}
} 
	return (!stack.length);
}

module.exports = matchWord;
