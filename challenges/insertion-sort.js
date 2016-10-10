// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(arr) {

  let count = 0;

  while (count < arr.length - 1) {
    let current = arr.splice(count, 1);
    console.log(arr);
    let insideCounter = count;
    while (insideCounter > 0) {
      if (arr[insideCounter] < current) {
        arr.splice(insideCounter, 0, current);
      } else {
        insideCounter--
      }
    }
    count++
  }

}

var erray = [9, 7, 6, 8, 5, 3, 1, 2];

// console.log( erray.splice(5,1));
// console.log(erray);

console.log(insertionSort(erray));

module.exports = insertionSort;