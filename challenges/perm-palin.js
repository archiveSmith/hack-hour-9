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
  str = str.toLowerCase();
  const cache = {};
  let oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (cache[char]) cache[char]++;
    else cache[char] = 1;
  }

  for (let key in cache) {
    if (cache[key] % 2 === 1) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

module.exports = permPalin;