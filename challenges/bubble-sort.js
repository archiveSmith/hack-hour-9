// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = array.reduce((isSorted, next, i, arr) => {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      return false
    }

    return isSorted;
  }, true)

  return sorted ? array : bubbleSort(array);
}

module.exports = bubbleSort;
