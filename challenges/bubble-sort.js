// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let sorted = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[j], array[i]] = [array[i], array[j]];
        sorted = false;
      }
    }
    if (sorted === true) {
      break;
    }
  }
  return array;
}


module.exports = bubbleSort;
