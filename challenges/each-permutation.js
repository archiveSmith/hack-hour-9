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
  const outArr = [];
  function helper(first, rest) {
    if (rest.length <= 0) return outArr.push(first);

    for (let i = 0; i < rest.length; i++) {
      console.log('calling hellper on - ', arr[i], ' ', rest.slice(i));
      console.log('rest[i] = ', rest[i])
      first.concat(rest[i]);
      helper(first, rest.slice(i + 1));
    }
  }
  helper(arr.slice(0, 1), arr.slice(1));
  return outArr;
}

console.log(eachPermutation([1, 2, 3], function(perm) {
  console.log(perm);
}))



module.exports = eachPermutation;
