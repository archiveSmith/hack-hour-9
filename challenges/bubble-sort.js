// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let loopAgain = false;
  let current;

  for (var j = 0; j < array.length; j++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        loopAgain = true;
        current = array[i];
        array[i] = array[i + 1];
        array[i + 1] = current;
      }
    };
  }

  return array;
}

console.log(bubbleSort([4, 3, 6, 1]));

module.exports = bubbleSort;