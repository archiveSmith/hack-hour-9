// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	//all words must be closed by reverse of word
	//not case sensitive
	//first step, make everything the same case.
	var upperstr = str.toUpperCase();
	//store each new opening word
	var lastword = [];
	//break words into array by spaces
	var stringArray = upperstr.match(/[^_\W]+/g);

	for(let i = 0; i < stringArray.length; i++){
		//add present word to array of last words
		lastword.push(stringArray[i])
		
		//check if 2nd to last word is equal to reverse of last word
		if (i>1 && lastword[lastword.length-2].split('').join() === lastword[lastword.length-1].split('').reverse().join()){
			//if the last two words are reverses of one another, remove them.
			lastword.splice(-2,2);
			i++;
		}
	}
	//if everything has been removed from lastlength, return true;
	if(lastword.length === 0){
		return true;
	}
	else {
		return false;
		
	}
}

module.exports = matchWord;
