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
  permutations(arr).forEach(permutation => callback(permutation));
}

function permutations(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  return permutations(arr.slice(1))
    .reduce((acc, permutation) => {
      permutation.forEach((_, i) => {
        acc.push(
          permutation.slice(0, i).concat([arr[0]]).concat(permutation.slice(i))
        )
      })

      acc.push(permutation.concat([arr[0]]))

      return acc;
    }, [])
    .filter((permutation, i, array) => 
      array.slice(0, i).every(perm => !deepEquals(perm, permutation)))
}

function deepEquals(arr1, arr2) {
  return arr1.every((element, i) => arr1[i] === arr2[i])
}

eachPermutation([1, 2, 2], permutation => console.log(permutation));



module.exports = eachPermutation;
