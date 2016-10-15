// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array) || array.length <= 1) return array;
  let swapped = true,
    i = 0,
    len = array.length;
  while (moved) {
    swapped = false;
    for (i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        array[i] = array[i] ^ array[i + 1];
        array[i + 1] = array[i] ^ array[i + 1];
        array[i] = array[i] ^ array[i + 1];
        swapped = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
