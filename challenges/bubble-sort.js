// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
     for (let j = i + 1; j < array.length; j++) {
       if (array[i] < array[j]) {
         const tempNum = array[i];
         array[i] = array[j];
         array[j] = tempNum;
       }
     }
  }
}

module.exports = bubbleSort;
