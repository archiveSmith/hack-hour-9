/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array. Permutations must not repeat any of the array elements.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/


// 9 items 4000ms
// function eachPermutation(arr, callback) {
//   permutations(arr).forEach(callback);
// }

// function permutations(array) {
//   return array.length ?
//     (concatMap((element) =>
//       concatMap((newArray) =>
//         ([[element].concat(newArray)]),
//         permutations(delete1(element, array))),
//       array)) :
//     [[]];
// }

// function concatMap(fn, array) {
//   return [].concat.apply([], array.map(fn));
// }

// function delete1(element, array) {
//   return deleteBy((a, b) => a === b, element, array);
// }

// function deleteBy(fn, element, array) {
//   return array.length ?
//     fn(element, array[0]) ?
//       array.slice(1) :
//       [array[0]]
//         .concat(deleteBy(fn, element, array.slice(1))) :
//     [];
// }


// 9 items 12ms
function eachPermutation(arr, callback) {
  heapsUtil(0);
  function heapsUtil(index) {
    if (index === arr.length) {
      return callback(arr);
    }
    for (let j = index; j < arr.length; j++) {
      swap(arr, index, j);
      heapsUtil(index + 1);
      swap(arr, index, j);
    }
  }
  function swap(array, i, j) {
    const temp = arr[j];
    array[j] = arr[i];
    array[i] = temp;
  }
}



// 9 items 50ms
// function eachPermutation(arr, callback) {

//   var path = []; // these arrays will be the only ones we create. they will get mutated
//   var indexesUsed = [];

//   permUtil(0);
//   function permUtil(pathIndex) {
//     if (pathIndex === arr.length) { // base case. done building up path
//       return callback(path);
//     }
//     for (var i = 0; i < arr.length; i++) {
//       if (!indexesUsed[i]) {  // only if this element hasn't been used yet
//         indexesUsed[i] = true;
//         path[pathIndex] = arr[i];
//         permUtil(pathIndex + 1);
//         indexesUsed[i] = false;
//       }
//     }
//   }
// }


// 9 items 632ms
// function eachPermutation(arr, callback) {

//   var indexesUsed = []; // can't repeat elements, so keep track of the indexes of the elements we've already used
//   for (var i = 0; i < arr.length; i++) {
//     indexesUsed.push(false);
//   }

//   permUtil([], indexesUsed);
//   function permUtil(path, indexesUsed) {
//     if (path.length === arr.length) { // base case. done building up path
//       return callback(path);
//     }
//     for (var i = 0; i < arr.length; i++) {
//       if (indexesUsed[i] === false) {
//         var indexesUsedClone = indexesUsed.slice();
//         indexesUsedClone[i] = true;
//         permUtil(path.concat(arr[i]), indexesUsedClone); // the concat method creates a new array, rather than pushing to the existing array
//       }
//     }
//   }
// }


// console.time('start');
// eachPermutation([1, 2, 3, 4, 5, 6, 7, 8, 9], (perm) => {
// });
// console.timeEnd('start');

module.exports = eachPermutation;
