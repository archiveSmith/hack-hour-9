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

2 => 2
3 => 6
4 => 24
*/

function eachPermutation(arr, callback) {
  const permutations = getPermutations(arr);

  permutations.forEach((el) => callback(el));
}

function getPermutations(array) {
  if (array.length === 1) return array;

  const permutations = [];

  for (let i = 0; i < array.length; i++) {
    const tempArr = array.slice(0, i).concat(array.slice(i + 1, array.length));
    const prev = getPermutations(tempArr);
    const curr = [array[i]];

    prev.forEach((el) => {
      permutations.push(curr.concat(el));
    });
  }

  return permutations;
}

module.exports = eachPermutation;
