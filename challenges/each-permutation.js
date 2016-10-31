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

function eachPermutation(arr, callback) {
  permutations(arr).forEach(callback);
}

function permutations(array) {
  return array.length ?
    (concatMap((element) =>
      concatMap((newArray) =>
        ([[element].concat(newArray)]),
        permutations(delete1(element, array))),
      array)) :
    [[]];
}

function concatMap(fn, array) {
  return [].concat.apply([], array.map(fn));
}

function delete1(element, array) {
  return deleteBy((a, b) => a === b, element, array);
}

function deleteBy(fn, element, array) {
  return array.length ?
    fn(element, array[0]) ?
      array.slice(1) :
      [array[0]]
        .concat(deleteBy(fn, element, array.slice(1))) :
    [];
}


module.exports = eachPermutation;
