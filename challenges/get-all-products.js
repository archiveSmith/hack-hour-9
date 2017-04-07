



/* getAllProducts()
 * Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getAllProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
**/



// if you could use division...
// strategy: break the rules 🤘
const getAllProducts = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0]; // why?
  const totalProduct = array.reduce((memo, item) => memo * item);
  const results = [];
  array.forEach((item) => {
    if (item !== 0) {
      results.push(totalProduct / item);
    } else {
      results.push(0);
    }
  });
  return results;
};
// doesnt really work, but it will get you close
// 


// strategy: brute force
const getAllProducts1 = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  const results = [];
  let curProd;
  for (let i = 0; i < array.length; i += 1) {
    curProd = 1;
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) {
        curProd *= array[j];
      }
    }
    results.push(curProd);
  }
  return results;
};
// time complexity: O(n^2)
// space complexity: O(n +1) => O(n)


// tip: recognize a break condition
// strategy: break early
const getAllProducts2 = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  const results = [];
  let curProd;
  for (let i = 0; i < array.length; i += 1) {
    curProd = 1;
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) {
        if (array[j] === 0) {
          curProd = 0;
          break;
        }
        curProd *= array[j];
      }
    }
    results.push(curProd);
  }
  return results;
};
// time complexity: O(n^2) in the worstcase, but better performance if there is a 0!
// space complexity: O(n +1) => O(n)


// hmmm maybe we could use recursion!
// strategy: tail end optimized recursion
const getAllProducts3 = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  const results = [];
  // note the index argument bellow, this is a way to
  // recursively loop thorugh an array without slice
  const recurProd = (skip, index = 0, cur = 1) => {
    if (array[index] === undefined) {
      return cur;
    }
    if (index !== skip && array[index] === 0) {
      return 0;
    }
    if (index === skip) return recurProd(skip, index + 1, cur);
    return recurProd(skip, index + 1, cur * array[index]);
  };
  for (let i = 0; i < array.length; i += 1) {
    results.push(recurProd(i));
  }
  return results;
};
// note: not performant




// tip: try to recognize mirroring when redundantly calculating
// strategy: use problem math to optimize solution
const getAllProducts4 = (array) => {
  if (!array || !Array.isArray(array) || array.length <= 1) return [0];
  const results = [];
  const front = [];
  const back = [];
  let curProduct = 1; // need to exclude current value
  // populate the two arrays;
  // the running product forward
  for (let i = 0; i < array.length; i += 1) {
    front[i] = curProduct;
    curProduct *= array[i];
  }
  // the running product backward
  curProduct = 1;
  for (let j = array.length - 1; j > 0; j -= 1) {
    back[j] = curProduct;
    curProduct *= array[j];
  }
  // mutiply them both, and you have the result!
  for (let k = 0; k < array.length; k += 1) {
    results[k] = front[k] * back[k];
  }
  return results;
};
// time complexity: O(3n) !! => O(n)
// space complexity: O(3n) not as good...
// its a tradeoff! you get to decide the best answer









getAllProducts1();
getAllProducts2();
getAllProducts3();
getAllProducts4();
getAllProducts5();

module.exports = getAllProducts;