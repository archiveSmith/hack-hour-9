// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    var right = array[i];
    let newI = i;
    for (var j = i - 1; j >= 0; j--) {
      if (right < array[j]) {
        let temp = array[newI];
        array[newI] = array[j];
        array[j] = temp;
        newI--;
      }
    }
  }
  return array;
}

module.exports = insertionSort;
