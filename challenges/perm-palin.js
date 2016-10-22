/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */


function permPalin(str) {
  let letters = {};
  let temp = str.toLowerCase().split('');
  for (let i = 0; i < temp.length; i++) {
    if (letters[temp[i]]) {
      letters[temp[i]]++;
    } else {
      letters[temp[i]] = 1;
    }
  }
  const odds = [];

  for (const letter in letters) {
    if (letters[letter] % 2 !== 0) {
      odds.push(letter);
    }
  }
  if (odds.length === 0 || odds.length === 1) {
    return true;
  }
  return false;
}




module.exports = permPalin;