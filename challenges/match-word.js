// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
let strArray = str.match(/([a-zA-Z]+)/g);

let testArray = [];
if (str === '') return true;

  for (var i = 0; i < strArray.length; i++) {
    let revStr = strArray[i].split('').reverse().join('');
    if(revStr === testArray[testArray.length - 1]) {
      testArray.pop();
    } else {
      testArray.push(strArray[i]);
    }
    strArray[i]
  }
  if (testArray.length > 0) return false;

  return true;

}
// console.log()
// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));

module.exports = matchWord;
