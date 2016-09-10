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
  const strArr = str.split('');
  let count = {};
  for (let i = 0; i < strArr.length; i++){
    if (!count[strArr[i]]) {
      count[strArr[i]] = 1;
    } else {
      count[strArr[i]]++
    }
  }
  let isPalin = 0;
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      isPalin++
    }
  }
  if (isPalin > 1) {
    return false;
  }
  return true;
}

// tests
// console.log('should be true', permPalin('abab'));
// console.log('should be false', permPalin('cbac'));
// console.log('should be true', permPalin('cbaba'));
// console.log('should be false', permPalin('cbacz'));
// console.log('should be true', permPalin('a'));

module.exports = permPalin;
