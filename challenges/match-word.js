// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


function matchWord(str) {
  let mutatedStr = str,
    firstWord = '',
    lastWord = '';
  //if length is 0 return true
  if (mutatedStr.length === 0) {
    return true;
  }
  //replace all non letters with a hash. 
  mutatedStr = mutatedStr.replace(/[^0-9a-z]/gi, ' ');
  //remove all starting or trailing hashes. 
  mutatedStr = mutatedStr.trim();
  //loop through string.
  //if starting index is a letter, then add to first word. if not a letter than stop loop. 
  //in the same loop, move backwards. if index is a letter add to last word. if not a letter stop loop. 
  for (let endIndex = mutatedStr.length - 1,
      i = 0; i < mutatedStr.length; i++, endIndex--) {
    if (mutatedStr[i] === ' ' && mutatedStr[endIndex] === ' ') {
      break
    } else {
      firstWord += mutatedStr[i];
      lastWord += mutatedStr[endIndex]
    }
  }
  //check if first word and last word are ===
  if (firstWord.toLowerCase() === lastWord.toLowerCase()) {
    return true;
  } else {
    return false;
  };
}

module.exports = matchWord;
