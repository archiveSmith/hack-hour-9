// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str === '') {
    return true;
  }
  const filtered = str.toUpperCase().match(/[a-zA-Z]+/gi);
  const store = [];

  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i].split('').reverse().join('') === store[store.length - 1]) {
      store.pop();
    } else {
      store.push(filtered[i]);
    }
  }
  if (store.length !== 0) {
    return false;
  }
  return true;
}

module.exports = matchWord;
