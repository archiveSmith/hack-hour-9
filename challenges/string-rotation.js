/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return undefined;
  }
  let arr1 = s1.split(''), arr2 = s2.split('');
  let s2Front, s2Back, start = arr1[0] + arr1[1];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] + arr2[i + 1] === start) {
      s2Front = arr2.slice(i);
      s2Back = arr2.slice(0, i);
    }
  }
  let test = s2Front.join('') + s2Back.join('');
  return isSubstring(s1, test)
}
module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
