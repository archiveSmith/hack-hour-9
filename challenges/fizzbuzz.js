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
  if (typeof num !== 'number') return undefined;
  if (num !== Math.floor(num)) return undefined;
  
  const result = [];

  for (let n = 1; n <= num; n++) {
    let message = '';
    
    if (n % 3 === 0) {
      message += 'fizz';
    }

    if (n % 5 === 0) {
      message += 'buzz';
    }

    if (message === '') {
      message = n;
    }

    result.push(message);
  }

  return result;
}

module.exports = fizzbuzz;
