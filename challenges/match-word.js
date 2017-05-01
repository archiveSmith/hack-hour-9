// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let tempStr = str.split('');
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i].toUpperCase() === tempStr[i].toLowerCase()) {
      tempStr[i] = ' ';
    }
  }
  tempStr = tempStr.join('').split(' ');

  const temp = [];
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr[i] !== '') {
      temp.push(tempStr[i].toLowerCase());
    }
  }
    
  if (temp.length % 2 !== 0) return false;
  for (let i = 0; i < temp.length / 2; i++) {
    if (temp[i].length !== temp[temp.length - i - 1].length) return false;
    for (let j = 0; j < temp[i].length; j++) {
      if (temp[temp.length - i - 1].indexOf(temp[i][j]) === -1) {
        return false;
      }
    }
    temp.pop();
    temp.shift();
  }

  return true;
}

module.exports = matchWord;
