// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapNeeded = true;
  while (swapNeeded) {
    swapNeeded = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i]>array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1]=temp;
        swapNeeded = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
