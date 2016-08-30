// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  var arr = [];
  var temp = [];
  //match only letters, convert all to lowercase so comparisons are case-insensitive
  var splitted = str.toLowerCase().split(/[^A-Za-z]/);
  
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] !== '') {
      arr.push(splitted[i]);
      if (temp.indexOf(splitted[i].split('').reverse().join('')) !== -1) {
        temp.pop();
      } else {
        temp.push(splitted[i]);
      }
    }
  }
  return temp.length === 0;
}

module.exports = matchWord;
