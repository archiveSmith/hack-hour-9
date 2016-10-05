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
if (typeof num !== 'number'){
	num = 100;
	console.log('no number supplied, so we added one for you :3')
}
let arr = [];
for (var i = 1; i <= num; i++){
	let output = '';
	
	if( i % 3 === 0){
		output += 'fizz';
	}

	if( i % 5 === 0){
		output += 'buzz';
	}

	arr.push(output || i);
}
	return arr;
}


module.exports = fizzbuzz;
