// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  let reWord = /([a-zA-Z]+)/gi;
  let matchedArr = str.match(reWord);
  let storage = [];

  //base case
  if (str === '') return true;

  //traversing the words
  for (let i = 0; i < matchedArr.length; i++) {
    let reversedStr = matchedArr[i].split('').reverse().join('');
    //checking if the reversed word is at the last position of the storage
    //if it is, we're going to remove it
    //if is not we're going do add to it
    if (reversedStr == storage[storage.length-1]) {
      storage.pop();
    } else {
      storage.push(matchedArr[i]);
    }
  }

  //at the end, if the storage is not empty is because str is balanced and with the write words
  if (storage.length > 0) return false;

  //if the storage is empty, we've hit the expected result
  return true;
}

module.exports = matchWord;
