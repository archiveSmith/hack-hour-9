// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	if (typeof str !== 'string') return undefined;

  const words = getWords(str);
  if (words.length === 0) return true;

  const unmatched = [words[0]];

  for (let i = 1; i < words.length; i++) {
  	// If this word matches the last unmatched word,
  	// shift the last unmatched word of the array, it has been accounted for.
    if (areReversed(words[i], unmatched[0])) {
      unmatched.shift();
    }
    // If this word matches any other unmatched word, the keywords are
    // mismatched, return false.
    else if (unmatched.includes(reverse(words[i]))) {
      return false;
    }
    // If this word does not match any of the unmatched words, put it in the
    // array of unmatched words.
    else {
      unmatched.unshift(words[i]);
    }
  }

  return unmatched.length === 0;
}

function getWords(str) {
	const words = str.match(/[a-zA-Z]+/g);
  return (words ? words.map(word => word.toLowerCase()) : []);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function areReversed(str1, str2) {
  if (!str1) return false;
  if (!str2) return false;

  return str1 === reverse(str2);
}

module.exports = matchWord;
