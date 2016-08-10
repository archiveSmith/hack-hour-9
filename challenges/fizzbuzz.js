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
    //create array.
    //count numbers to num. 
    //if number is divisble by 3.
    //replace number with fizz.
    //if number is divisble by 5. 
    //replace number with buzz. 
    //if number is divisble by 3 and 5.
    //replace with fizzbuzz. 

    let arr = [];

    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            arr.push('fizz');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            arr.push('fizz');
        } else if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizz');
        } else {
            arr.push(i);
        }
    }

    console.log(arr);


    return arr;
}

fizzbuzz(16);

module.exports = fizzbuzz;
