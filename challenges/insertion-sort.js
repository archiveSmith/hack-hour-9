// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array, start = 1) {
  //Edge cases / Base case
  if (!array || start >= array.length) return array;

  // Recursive case
  if (array[start] < array[start - 1]) {
    const storedValue = array[start];

    let i = start - 1;
    for ( ; storedValue < array[i]; i--) {
      array[i + 1] = array[i];
    }

    array[i + 1] = storedValue;
  }

  return insertionSort(array, start + 1);
}

module.exports = insertionSort;
