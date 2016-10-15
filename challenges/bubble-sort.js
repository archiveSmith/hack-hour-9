// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let swapped = false;

  for (let i = 0; i < array.length; i++) {
    swapped = false;

    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) return array;
  }

  return array;
}

module.exports = bubbleSort;
