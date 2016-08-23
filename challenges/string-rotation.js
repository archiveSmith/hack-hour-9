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

<<<<<<< HEAD
 function isSubstring(s1, s2) {
   return stringRotation(s1,s2);
 }

 function stringRotation(s1, s2) {
   for (let i = 1; i < s1.length; i++) {
     const rotated = s1.slice(i, s1.length) + s1.slice(0, i)
     if (rotated === s2 || s2 === s1) {
       return true;
     }
   }
   return false;
 }
=======
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {

}
>>>>>>> 842f94f61a4e684a2bc816e0da356c807186df2a

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
