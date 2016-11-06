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
	var outputarray = [];
	//check if num is an integer and whether it is positive. If it's not a number don't do anything.
	if(Number.isInteger(num) && num > 0){
		//if num is a positive integer, increment with ++ and use num as upper limit
		for(var i = 1; i <= num; i ++){
			if(i % 15 === 0){
				outputarray.push("fizzbuzz");
			}
			else if ( i % 5 === 0){
				outputarray.push("buzz");
			}
			else if ( i % 3 === 0){
				outputarray.push("fizz");
			}
			else {
				outputarray.push(i);
			}
		}
	return outputarray;
	}
	//if it's not a positive number, check if it's a negative one.
	else if(Number.isInteger(num) && num < 0){
		for(var i = 1; i >= num; i --){
			if(i % 15 === 0){
				outputarray.push("fizzbuzz");
			}
			else if ( i % 5 === 0){
				outputarray.push("buzz");
			}
			else if ( i % 3 === 0){
				outputarray.push("fizz");
			}
			else {
				outputarray.push(i);
			}
		}
	return outputarray;
	}
}

module.exports = fizzbuzz;
