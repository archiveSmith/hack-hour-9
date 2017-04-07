


/* You are given an array of integers with both positive and negative numbers.
 * Write a function to find the maximum sum of all subarrays.
 * A subarray is a section of consecutive elements from the
 * original array.
 * The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */



// questions
// did anyone struggle, and then end up solving it?
// what was your thought process? how did you work through it?
// did anyone get a solution that worked, and then optimize?
// what were the targets of you oprimizations?




// note: for these next solutions, feel free to stop me and ask
// for a whiteboarding of solution at anytime
// please please ask a question if you do not understand a WHY
// or a HOW.
// never sacrifice public perception for learning
// that's a statement that what other people think of my knowledge
// is more important than my actual knowledge




// remmeber, clarification of a problem is super important
// for many reasons, including hirability
// even if you think you understand the problem
// there is no greater waste of effort than solving a problem
// you were not asked
// clarification also makes the problem EASIER
// by reducing the problem space you are trying to tackle
// and increasing the visibilty of problem specific oprimizations







// strategy: just make it work, remember all sums
const maxSubarray1 = (arr) => {
  const sums = [];
  let sum;
  for (let i = 0; i < arr.length; i += 1) {
    sum = 0;
    for (let j = i; j < arr.length; j += 1) {
      sum += arr[j];
      sums.push(sum);
    }
  }
  return Math.max(...sums);
};
// time complexity: O(n^2)
// space complexity: O(n^2) thats terrible!
// the return value is not quite right...
// if all negative numbers, what should we return?
// we can do better




// strategy: only remember necessary info
const maxSubarray2 = (arr) => {
  let maxSum = 0;
  let sum;
  for (let i = 0; i < arr.length; i += 1) {
    sum = 0;
    for (let j = i; j < arr.length; j += 1) {
      sum += arr[j];
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
};
// time complexity: O(n^2) no improvement 😢
// space complexity: O(2) => O(c) way better!! 😇
// will return 0 if all negative elements
// we can still kick it up a notch




// strategy: single loop, use some cool es6
const maxSubarray3 = (arr) => arr.reduce((memo, num) => {
  let { sum, max } = memo;// object destructuring assignment (es6)
  sum += num;
  if (sum > max) max = sum;
  if (sum < 0) sum = 0;
  return { max, sum }; // object creation shorthand (es6)
  //      ^ what does this return?
}, { max: -Infinity, sum: 0 }).max;
// time complexity: O(n)
// space complexity: O(4) => O(c)
// this I would say, repersents an excellent solution
// but we can still improve, by avoiding the use of objects
// why would we want to avoid objects?
// why use negative inifinity?
// can you push this problem past linear time complexity? why or why not?



// strategy: use math/logic to optimize solution based on specifics of problem
const maxSubarray4 = (arr) => {
  let curSum = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i += 1) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    // this asks the question, which is larger, elment[i]
    // or sum of array up to and including element[i]
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
// time complexity: ?
// space complexity: ?
// important note: readabillity is at times just as important as performance
// can you see any downsides with this solution compared to the previous?
// will this always be faster?
// will it always be more readable?




// intro to performance testing
// let's use console.time, console.timeEnd and a helper funciton to test our code
// notice how solutions 3 and 4 may not always outperform eachother on small arrays
// it depends on the randomness of the array, and the sign of the number

const makeArr = (n) => {
  const arr = [];
  let sign;
  for (let i = 0; i < n; i++) {
    sign = Math.random() > 0.5 ? -1 : 1;
    arr.push(sign * Math.floor(Math.random() * n));
  }
  return arr;
};
const picoArr = makeArr(10);
const tinyArr = makeArr(100);
const smallArr = makeArr(1000);
const medArr = makeArr(10000); // may freeze your computer on maxSubarray 1 and 2
const bigArr = makeArr(100000); // may freeze your computer on maxSubarray 1 and 2

console.log(maxSubarray1(picoArr) === maxSubarray2(picoArr));
console.log(maxSubarray2(picoArr) === maxSubarray3(picoArr));
console.log(maxSubarray3(picoArr) === maxSubarray4(picoArr));


// note: if writting your code on repl, always save or copy your code before you run
// or you may lose it if it freezes

console.log('\n\npicoArray');
console.log(`maxSubarray: ${maxSubarray4(picoArr)}`)


console.time('maxSubarray1');
maxSubarray1(picoArr);
console.timeEnd('maxSubarray1');
console.time('maxSubarray2');
maxSubarray2(picoArr);
console.timeEnd('maxSubarray2');
console.time('maxSubarray3');
maxSubarray3(picoArr);
console.timeEnd('maxSubarray3');
console.time('maxSubarray4');
maxSubarray4(picoArr);
console.timeEnd('maxSubarray4');

console.log('\n\ntinyArray');
console.log(`maxSubarray: ${maxSubarray4(tinyArr)}`)



console.time('maxSubarray1');
maxSubarray1(tinyArr);
console.timeEnd('maxSubarray1');
console.time('maxSubarray2');
maxSubarray2(tinyArr);
console.timeEnd('maxSubarray2');
console.time('maxSubarray3');
maxSubarray3(tinyArr);
console.timeEnd('maxSubarray3');
console.time('maxSubarray4');
maxSubarray4(tinyArr);
console.timeEnd('maxSubarray4');

console.log('\n\nsmallArray');
console.log(`maxSubarray: ${maxSubarray4(smallArr)}`)



console.time('maxSubarray3');
maxSubarray3(smallArr);
console.timeEnd('maxSubarray3');
console.time('maxSubarray4');
maxSubarray4(smallArr);
console.timeEnd('maxSubarray4');

console.log('\n\nmedArray');
console.log(`maxSubarray: ${maxSubarray4(medArr)}`)



console.time('maxSubarray3');
maxSubarray3(medArr);
console.timeEnd('maxSubarray3');
console.time('maxSubarray4');
maxSubarray4(medArr);
console.timeEnd('maxSubarray4');


console.log('\n\nbigArray');
console.log(`maxSubarray: ${maxSubarray4(bigArr)}`)


console.time('maxSubarray3');
maxSubarray3(bigArr);
console.timeEnd('maxSubarray3');
console.time('maxSubarray4');
maxSubarray4(bigArr);
console.timeEnd('maxSubarray4');


module.exports = maxSubarray;
