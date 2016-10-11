// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// swap nums right to left until it finds a number smaller than itself

function insertionSort(array) {
  // sort left to right
  for (let i = 1; i < array.length; i++) {
    let counter = i;
    let tempNum;
    while (array[counter] < array[counter - 1]) {
      tempNum = array[counter - 1];
      array[counter - 1] = array[counter];
      array[counter] = tempNum;
      counter--;
    }
  }
  return array;
}

module.exports = insertionSort;
