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
  let storage = {}

  for (let i = 0; i < str.length; i++) {
    if (!storage[str[i]]) {
      storage[str[i]] = 1;
    } else {
      storage[str[i]] = storage[str[i]] + 1;
    }
  }
  let oneCounter = 0;
  for (key in storage) {
    if (storage[key] == 1) {
      oneCounter += 1;
    }
  }
  for (key in storage) {
    if (storage[key] % 2 !== 0 && oneCounter % 2 === 0) {
      return false;
    }
  }
  return true;
}

module.exports = permPalin;
