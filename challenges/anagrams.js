/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  	const results = makeAnagrams("", string);
  	const noRepeats = results.reduce(function(obj, val, i) {
  		    obj[val] = 0;
  		    return obj;
  	    }, {});
  
  	return Object.keys(noRepeats);
  }
  
  function makeAnagrams(head, rest){
      const intermediate = [];
      if (rest.length === 0) {
          intermediate.push(head);
      }
      let prefix;
      let suffix;
      for (let i = 0; i < rest.length; i++) {
          prefix = rest.slice(0, i);
          suffix = rest.slice(i+1);
          intermediate = intermediate.concat(makeAnagrams(head + rest.charAt(i), prefix + suffix));
      }
      return intermediate;
  }
module.exports = anagrams;
