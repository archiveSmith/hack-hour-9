// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	// set constants
	const fizzStr = 'fizz';
	const buzzStr = 'buzz';
	const fizzbuzzStr = 'fizzbuzz';
	
	// create output [] with size of input num
	var output = [];
	//console.log(output.length);
	
	// iterate through output []
	for(var i = 1; i <= num; i++) {
		// check if divisible by 3 (%3 === 0) & 5 (% 5 === 0)
		if( (i % 3 === 0) && (i % 5 === 0) ) {
			// insert "fizzbuzz"
			output.push(fizzbuzzStr);
		} else if(i % 3 === 0) { // else if divisble by 3 only
			// insert "fizz"
			output.push(fizzStr);
		} else if (i % 5 === 0) { // else if divisible by 5 only
			// insert "buzz"
			output.push(buzzStr);
		} else {
			output.push(i);
		}		
	}

	// return output []
	return output;
}

//console.log(fizzbuzz(16));

module.exports = fizzbuzz;


