// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let outer = 1;
  let inner;
  while (outer < array.length) {
    inner = outer;
    while (inner >= 0) {
      if (array[inner - 1] > array[inner]) {
        let temp = array[inner - 1];
        array[inner - 1] = array[inner]
        array[inner] = temp;
      }
      inner--;
    }
    outer++;
  }
  return array
}

module.exports = insertionSort;