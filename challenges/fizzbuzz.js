webkitConvertPointFromNodeToPage// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
	const result = [];

	for (let index = 0; index <=num; index++) {

		if(index % 5 === 0 && index % 3 === 0) {
			result.push('fizzbuzz');
		} else if(index % 3 === 0) {
		result.push('fizz');
		} else if(index % 5 === 0) {
		result.push('buzz');
		}
		else {
			result.push(index);
		}
	}
	return result;
}

module.exports = fizzbuzz;

/// Updated gitconfig to fix Git Setup
