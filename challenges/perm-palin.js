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
  strArr = str.trim().toLowerCase().split('');
  const perms = []

  function permutations(charArr, prev =[]) {
    let cur;
    for (let i = 0; i < charArr.length; i++) {
      cur = charArr.splice(i, 1);
      if (charArr.length === 0) {
        perms.push(prev.concat(cur).join(''));
      }
      permutations(charArr.slice(), prev.concat(cur));
      charArr.splice(i, 0, cur[0]);
    }
  }
  function palin(s) {
    return s === s.split('').reverse().join('');
  }
  permutations(strArr);
  return perms.some(palin);
}

module.exports = permPalin;