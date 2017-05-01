// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	if (typeof str !== "string") return false;
	if (str.length === 0) return true;
	var words = str.toLowerCase()
			 .replace(/[^0-9a-z]/gi, ' ')
			 .split(" ")
			 .filter((word) => word !== "")
			 
	let wordStack = [];
	for (word of words) {
		if (wordStack.length === 0) { 
			wordStack.push(word);
		} else {
			var tempword = word.split("").reverse().join("");
			if (tempword == wordStack[wordStack.length - 1]) {
			wordStack.pop();
			} else {
			wordStack.push(word);
			}
		}
	}
	return wordStack.length === 0
}

module.exports = matchWord;
