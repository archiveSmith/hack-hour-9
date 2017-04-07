/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


// coding challenge tips
// keys to success:
// 1. pattern recognition
// 2. comparing to previous problem exposure
// 3. understanding time and space complexity


// “If I had an hour to solve a problem I'd spend
// 55 minutes thinking about the problem
// and 5 minutes thinking about solutions.”
//         -some smart dude

// how to solve:
// indentify what the problem is asking
// whiteboard
// develop a strategy
// think about possible computational methods
// looping, recursion, object orientation, mathmatical, string manipulation, etc..
// consider edge cases
// code solution that works anyway you can do it
// test
// optimize
// rejoice



// strategy: just make it work
const modeMean1 = (arr) => {
  let sum = 0;
  const counts = {};
  let element;
  //                                 V why is this better than i++?
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  for (let j = 0; j < arr.length; j += 1) {
    element = arr[j];
    if (!counts[element]) {
      counts[element] = 1;
    } else {
      counts[element] += 1;
    }
  }
  const mean = Math.floor(sum / arr.length);
  const mode = Object.keys(counts).reduce((accum, num) => {
    if (counts[num] > counts[accum]) return num;
    if (counts[num] === counts[accum]) return accum > num ? accum : num;
    return accum;
  });
  return mean === Number(mode);
};



// strategy: compute counts and sum in one loop
const modeMean2 = (arr) => {
  let sum = 0;
  const counts = {};
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
    if (!counts[arr[i]]) {
      counts[arr[i]] = 0;
    }
    counts[arr[i]]++;
  }
  const mean = Math.floor(sum / arr.length);
  const mode = Object.keys(counts).reduce((accum, num) => {
    if (counts[num] > counts[accum]) return num;
    if (counts[num] === counts[accum]) return accum > num ? accum : num;
    return accum;
  });
  return mean === Number(mode);
};



// strategy one loop to rule them all
const modeMean3 = (arr) => {
  let sum = 0;
  let maxFreq = -Infinity; // why use -Infinity?
  let mode = 0;
  arr.reduce((accum, num) => {
    sum += num;
    accum[num] = accum[num] ? accum[num] + 1 : 1;
    // make sure you know the ternary operator
    if (accum[num] > maxFreq) {
      maxFreq = accum[num];
      mode = num;
    }
    if (accum[num] === maxFreq) {
      mode = Math.max(mode, num);
    }
    return accum;
  }, {});
  return mode === Math.floor(sum / arr.length);
};





modeMean1();
modeMean2();
modeMean3();

module.exports = modemean;
