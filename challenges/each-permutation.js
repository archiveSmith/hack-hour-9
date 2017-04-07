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

function eachPermutation(array, callback, cur = []) {
  let len = array.length, i;
  if (array.length === 0) {
      return callback(cur);
  }
  for (i = 0; i < len; i++) {
    let item = array.splice(i, 1)[0];
    eachPermutation(array.slice(), callback, cur.concat(item));
    array.splice(i, 0, item);
  }
}



module.exports = eachPermutation;
