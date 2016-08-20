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
  let str1Length = s1.length;
  let str2Length = s2.length;
  if (str1Length !== str2Length){
    return false;
  }
  let str1Array = s1.split("");
  let str2Array = s2.split("");

  while(str1Array[0] !== str2Array[0]){
    let char = str2Array.pop();
    str2Array.unshift(char)
  }

  let str1 = str1Array.join("");
  let str2 = str2Array.join("");

  return isSubstring(str1,str2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
