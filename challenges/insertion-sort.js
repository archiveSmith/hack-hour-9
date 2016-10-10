// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let j, temp;
  for (let i = 1, len = array.length; i < len; i++) {
    j = i;
    temp = array[i];
    if (temp < array[i - 1]) {
      while (j > 0) {
      	if (array[j-1] <= temp) break;
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
  }
  return array;
}

module.exports = insertionSort;