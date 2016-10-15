// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {
//   let flipped = true;
//   let temp;
//   while (flipped) {
//     flipped = false;
//     for (let i = 0; i < array.length; ++i) {
//       if (array[i] > array[i + 1]) {
//         temp = array[i];
//         array[i] = array[i + 1];
//         array[i + 1] = temp;
//         flipped = true;
//       }
//     }
//   }
//   return array;
// }

function bubbleSort(array) {
  let flipped = false;
  let temp;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > array[i + 1]) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      flipped = true;
    }
  }
  return flipped ? bubbleSort(array) : array;
}


// test
// let arr = [2, 6, 3, 9, 5, 1, 0];
// console.log(bubbleSort(arr));

module.exports = bubbleSort;
