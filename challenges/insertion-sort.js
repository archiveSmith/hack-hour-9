// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let j, temp;
  for (let i = 1, len = array.length; i < len; i++) {
    j = i;
    temp = array[i];
    if (temp < array[i - 1]) {
      while (j > 0) {
        if (array[j - 1] <= temp) break;
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  }
  return array;
}
// Worst case : O(n^2)
// Best case: already sorted O(n)

// function insertionSort(array) {
//   for (var i = 1; i < array.length; i++) {
//     var j = i;
//     while (array[j] < array[j - 1] && j > 0) {
//       var temp = array[j];
//       array[j] = array[j - 1];
//       array[--j] = temp;
//     }
//   }
//   return array;
// }

module.exports = insertionSort;