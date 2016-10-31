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

  function permute(array, prev = []) {
    let len = array.length,
      cur,
      i;
    for (i = 0; i < len; i++) {
      cur = array.splice(i, 1);
      if (array.length === 0) {
        callback(prev.concat(cur))
      }
      permute(array.slice(), prev.concat(cur));
      array.splice(i, 0, cur[0]);
    }
  }
  permute(arr)
}



module.exports = eachPermutation;
