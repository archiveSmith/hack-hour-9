// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++){
    j = i;
    while (array[j + 1] < array[j] && j>= 0) {
      var temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp 
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;