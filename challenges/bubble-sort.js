// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        const tempNum = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tempNum;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
