// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.trim().length === 0) return true;
  const words = str.replace(/_/g, ' ').toLowerCase().match(/\w+/gi);
  const stack = [words[0]];
  for (let i = 1, len = words.length; i < len; i++) {
    if (stack[stack.length-1] !== words[i] && stack[stack.length-1] !== words[i].split('').reverse().join('')) {
      stack.push(words[i]);
    } else if (stack[stack.length-1] === words[i] || stack[stack.length-1] === words[i].split('').reverse().join('')) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

module.exports = matchWord;
