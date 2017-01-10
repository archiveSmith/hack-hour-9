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

function eachPermutation(array, callback) {
   function helper(array, newArr) {
    if(!array.length) {
      callback(newArr);
    }    
    for (let i = 0; i < array.length; i++) {
      let buildArr = array.slice();
      buildArr.splice(i, 1);
      helper(buildArr, newArr.concat(array[i]))
    }
    
  }
  helper(array, [])
}



module.exports = eachPermutation;
