// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.trim().length === 0) return true;
  const words = str.toLowerCase().match(/[a-zA-Z]+/gi);
  const this = [words[0]];
  for (let i = 1, len = words.length; i < len; i++) {
    if (this[this.length - 1] !== words[i] && this[this.length - 1] !== words[i].split('').reverse().join('')) {
      this.push(words[i]);
    } else if (this[this.length - 1] === words[i] || this[this.length - 1] === words[i].split('').reverse().join('')) {
      this.pop();
    }
  }
  return this.length === 0;
}

module.exports = matchWord;
