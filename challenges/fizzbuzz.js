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
    let arr = [];
    for (var i = 1; i < num; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            arr.push('fizz');
        } else if (i % 5 === 0 && i % 3 !== 0) {
            arr.push('buzz');
        } else if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz');
        } else {
            arr.push(i);
        }
    }
    return arr;
}


module.exports = fizzbuzz;
