// returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// ex: palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
function palindrome(string) {
  let regex = /[a-zA-Z]/gi;
  let newStr = "";
  let lowerTrimmedStr = string.trim().split(' ');

  var array = string.match(regex);

  newStr = array.join('').toLowerCase();
  lowerTrimmedStr = lowerTrimmedStr.join('').toLowerCase();

  // checking poncutuations
  lowerTrimmedStr = lowerTrimmedStr.split('!').join('');
  lowerTrimmedStr = lowerTrimmedStr.split(',').join('');

  console.log(newStr,lowerTrimmedStr);

  if (newStr === lowerTrimmedStr) {
    if (isReallyPalindrome(lowerTrimmedStr)) {
      return true;
    } else {
      return false;
    }
  }

  function isReallyPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while(start < end) {
      if(str[start] !== str[end]) {
        return false;
      } else {
        start++;
        end--;
      }
    }
    return true;
  }
}

// returns true is the input is prime.
// isPrime(1); -> false
// isPrime(2); -> true
// isPrime(3); -> true
// isPrime(4); -> false
function isPrime(num) {
  if(num === 1) {
    return false;
  }

  for(var i = num - 1; i > 1; i--) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

/** returns the nth fibonacci number. A Fibonnaci sequence is a list of numbers that begin with 0 and 1, and each subsequent number is the sum of the previous two
 * nthFibonacci(0); -> 0
 * nthFibonacci(1); -> 1
 * nthFibonacci(2); -> 1
 * nthFibonacci(3); -> 2
 * nthFibonacci(4); -> 3
 * Try to use recursion. What is the time complexity? Are you repeating the same function call with the
 * same arguments a lot? Are you able to compute nthFibonacci(1000)? If not, recursive algorithms can be
 * made MUCH more efficient using memoization. Try memoizing each result from nthFibonacci and see the
 * performance difference.
*/
// function nthFibonacci(num) {
//   //base cases
//   if(num === 0) {
//     return 0;
//   } else if(num === 1) {
//     return 1;
//   } else { //nonbase case
//     return nthFibonacci(num-1) + nthFibonacci(num-2);
//   }
// }

function nthFibonacci(num, cache) {
  if (cache === undefined) {
    cache = {};
  }

  //base cases
  if(num === 0) {
    // store in cache
    cache[0] = 0;
    return 0;
  } else if(num === 1) {
    cache[1] = 1;
    return 1;
  } else { //nonbase case
    var prev1;
    var prev2;

    // check cache
    if(cache[num-1]) {
      prev1 = cache[num-1];
    } else {
      prev1 = nthFibonacci(num-1);
    }

    if(cache[num-2]) {
      prev2 = cache[num-2];
    } else {
      prev2 = nthFibonacci(num-2);
    }

    var output = prev1 + prev2;

    // store in cache
    cache[num] = output;

    return output;
  }
}

/** returns a function with a context bound to this
 * var matt = {
 *  name: 'matt',
 *  shout: function() {
 *      alert(this.name);
 *  }
 * };
 * var boundShout = bind(matt.shout, matt);
 * boundShout(); -> alerts 'matt;
 * boundShout = bind(matt.shout, {name: 'kim'});
 * boundShout(); //alerts 'kim'
 */
function functionBind(func, context) {
  // return func.bind(context);
  context.func = func;

  return function() {
    return context.func();
  };

}

/**
 * returns every sequence of throws a single player could throw over a three-round game of rock-paper-scissors
 * rockPaperScissors(1); -> [['rock'],['paper'],['scissors']]
 * rockPaperScissors(2); ->
 * [['rock','rock'],['rock','paper'],['rock','scissors'],
 * ['paper','paper'],['paper','scissors'],['paper','rock'],
 * ['scissors','scissors'],['scissors','paper'],['scissors','rock']]
 */
function rockPaperScissors(num) {
  var rps = [['rock'], ['paper'], ['scissors']];

  // base cases
 if(num === 0) {
   return [];
 }

  if(num === 1) {
    return rps
  }

  // non base case
  // get previous game
  var priorGame = rockPaperScissors(num - 1);
  var currGame = [];

  // iterate through priorGame, and append rock, paper, scissors to it
  for(var i = 0; i < priorGame.length; i++) {
    currGame.push(priorGame[i].concat('rock'));
    currGame.push(priorGame[i].concat('paper'));
    currGame.push(priorGame[i].concat('scissors'));
  }

  return currGame;
}

function insertionSort(array) {
  if (array.length === 0 || array.length === 1) return array;
  let output = [array[0]];
  // console.log("output first item", output);

  for (let i = 1; i < array.length; i++) {
    let item = array[i];
    // console.log("item", item, i);
    for (let j = 0; j < output.length; j++) {
   	// 	console.log("output", output[j]);
      if (item <= output[j]) {
        output.splice(j,0,item);
        // console.log("condition splice", output);
        break;
      } else if (j === output.length - 1) {
        output.push(item);
        // console.log("condition push", output);
        break;
      }
    }
  }
  return output;
}


function bubbleSort(array) {
  let output = array.slice();
  // console.log("clone", output);
  let a = 0;
  let b = 1;
  let isSorted = false;

  if (output.length === 1) return output;

  while(true) {
  	// console.log("a, b, flag", a,b,isSorted);

  	if (output[a] > output[b]) {
        let temp = output[a];
        output[a] = output[b];
        output[b] = temp;
        isSorted = true;
      }

    if (b === output.length -1) {
      if (!isSorted) {
        break;
      } else {
        isSorted = false;
        a = 0;
        b = 1;
      }
    } else {
      a++;
      b++;
    }
  }
  return output;
}

function mergeSort(array) {
  // base case
  if(array.length === 1) {
    return array;
  }

  // assume array length is even for now
  var midIndex = Math.floor(array.length / 2);
  var left = array.slice(0, midIndex);
  var right = array.slice(midIndex);

  var output = sort(mergeSort(left), mergeSort(right));
  return output;

  function sort(left, right) {
    var temp = [];

    while(left.length > 0 || right.length > 0) {
      if(left.length > 0 && right.length > 0) {
        if(left[0] <= right[0]) {
          temp.push(left.shift());
        } else {
          temp.push(right.shift());
        }
      } else if(left.length > 0) {
        temp.push(left.shift());
      } else if(right.length > 0) {
        temp.push(right.shift());
      }
    }
    return temp;
  }


}
