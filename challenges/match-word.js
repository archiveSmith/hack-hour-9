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

  if (str === '') return true;

  if (matchedArr.length > 1) {
    console.log(str.match(reWord)); 	
    let reversedStr = matchedArr[0].split('').reverse().join('');
    console.log(reversedStr);
    console.log(str.match(/(*reversedStr*)/gi));
  } 
  //console.log(reWord.exec(str));

  // for (let i = 0; i < matchedArr.length; i++) {
  //   let reversedStr = matchedArr[i].split('').reverse().join('');
  //   for (let j = 1; j < matchedArr.length; j++) {
  //     if (reversedStr == matchedArr[j]) {
  //       return true;
  //     }
  //     console.log(matchedArr[i],reversedStr);
  //   }
}

module.exports = matchWord;
