// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      } else {
        break;
      }
    }
  }

  return array;
}

module.exports = insertionSort;
