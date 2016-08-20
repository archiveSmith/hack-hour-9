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
	if (!isSubstring(s1,s2)) {
		return false
	}

    //identify first letter in s1.
    let firstLetter = s1[0]
        //find the index of this first letter in s2. 
    let s2firstLetterIndex = s2.indexOf(firstLetter);

    if (s2firstLetterIndex === false) {
        return false;
    }
    //reorder s2 so that the first letter is index 0. 
    let news2 = "";
    for (var i = s2firstLetterIndex; i < s2.length; i++) {
        news2 += s2[i]
    }

    for (var i = 0; i < s2firstLetterIndex; i++) {
        news2 += s2[i]

    }

    //compare s2 to s1. 
    if (news2 === s1) {
        return true;
    } else {
        return false;
    }


}

console.log(stringRotation('hello', 'lhel'));


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
