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
	
	/* pseudocode */
	// it is a palindrome if
	// if length of str is odd
		// length % 2 = 1
		// length / 2 = 2 --> need 2 pairs
	
	// if length of str is even
		// length / 2 = 2 --> need 2 pairs
		
	// how to tell if a pair?
		// start at beginning of char array, curr element
			// able to find key in tracking object?
				// if not, add to it and set value to 1
				// if so, get the value and increment by 1, if value / 2 === 1, then we have a pair!  numPairs++, reset value to 0, move on
				
	// after iteration, if numPairs == numPairsFound, return true, else false
	
	var numPairsNeeded = Math.floor(str.length / 2);

	var numPairsFound = 0;
	var tracker = {};
	
	// turn str into array of chars
	var charArray = str.split('');

	
	for (var i = 0; i < charArray.length; i++) {
		
		var curr = charArray[i];
	
		
		var value = tracker[curr];

		
		if(value) { //able to find key
		
			value++; 
	
			
			if(value / 2 === 1) {
				++numPairsFound;
		
				tracker[curr] = 0;
			} else {
				tracker[curr] = value;
			}
			
		
		} else {  // unable to find key, insert key with value

			tracker[curr] = 1;
		}
		
	}
	

	
	return numPairsNeeded === numPairsFound ? true : false;

}

/* tests */
/*
console.log(permPalin('abab')); // => true
console.log(permPalin('cbaba')); // => true
console.log(permPalin('cbac')); // => false
console.log(permPalin('a')); // => true
*/

module.exports = permPalin;