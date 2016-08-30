// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (!str.match(/[a-z0-9]/i)) return true;

  let words = str.replace(/[^\w]|_/g, ' ')
         .replace(/\s+/g, ' ')
         .replace(/^\s|\s$/g, '')
         .toLowerCase()
         .split(' ');
  let wordCache = [];

  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].split('').reverse().join('');

    if (wordCache[wordCache.length - 1] !== reversed) wordCache.push(words[i]);
    else wordCache.pop();
  }

  return (!wordCache.length) ? true: false;
}

module.exports = matchWord;
