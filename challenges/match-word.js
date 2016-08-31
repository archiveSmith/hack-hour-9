// Some languages have "if" statements that are closed by "fi" instead of 
// curly brackets. Or they close a "case" with "esac", i.e. the same keyword 
// backwards. for this problem we'll check that all words in a string are "closed". 
// Write a function that takes a string and returns true if every word is closed
// by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let string = str.toLowerCase();
	let wordArray = [];
	let aWord = '';
	let allLetters = '';
	
	for (let index = 0; index < string.length -1; index++){
		while(isLowerCaseLetter(string[index])){
			aWord += string[index];
			index++;
		}
		
		if(aWord !== ''){
			wordArray.push(aWord);
		}
		aWord = '';
	}
	console.log(wordArray);
	if(wordArray.length === 1){
		return false;
	}

	
}

function isLowerCaseLetter(str) {
    return (/[a-z]/.test(str));
}

module.exports = matchWord;
