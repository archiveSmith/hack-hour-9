// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; array[j] < array[j - 1]; j--) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

module.exports = insertionSort;