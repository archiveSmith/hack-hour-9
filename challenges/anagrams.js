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
	var strArr = string.split('');
	var allCombos = findCombos(strArr);
	
	return allCombos.map(function(c, i, a) {
		return c.join('');
	});
	

		
	function findCombos(arr) {
		if(arr.length === 1) {
			return arr;
		} 
		
		var output = [];
		
		for(var i = 0; i < arr.length; ++i) {
			var curr = [arr[i]];
			
			var pool = arr.slice();
			pool.splice(i, 1);
			
			var combos = findCombos(pool);
			
			combos.forEach(function(combo) {
				output.push(curr.concat(combo));
			});		
		}
		
		return output;
	}
	
}
/* tests */
/*
var test1 = anagrams('ab');
console.log('test1', test1);

var test2 = anagrams('abc');
console.log('test2', test2);

var test3 = anagrams('abcd');
console.log('test3', test3);
console.log('test3 length', test3.length);
*/

module.exports = anagrams;
