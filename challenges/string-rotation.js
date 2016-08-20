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
	var trueArr = [];	//will hold all the stringrotations of s1 (result is true if s2 is contained in trueArr)
	var splitted = "hello".split("");
	for (var i = 0; i < s1.length; i++){
		
		var shifted = splitted.shift();
		var letterToPush = shifted;
		var pushed = splitted.push(letterToPush);
		trueArr.push(splitted.join(""));
	}
	//if s2 is contained in trueArr, s2 is a rotation of s1
	return trueArr.indexOf(s2) !== -1;
		
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
