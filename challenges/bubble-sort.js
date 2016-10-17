// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {
//   let flipped = true;
//   const arr = array;
//   while (flipped) {
//     flipped = false;
//     for (let i = 0; i < array.length; ++i) {
//       if (array[i] > array[i + 1]) {
//         const temp = array[i];
//         arr[i] = array[i + 1];
//         arr[i + 1] = temp;
//         flipped = true;
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(array) {
  let flipped = false;
  const arr = array;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > array[i + 1]) {
      const temp = array[i];
      arr[i] = array[i + 1];
      arr[i + 1] = temp;
      flipped = true;
    }
  }
  return flipped ? bubbleSort(array) : array;
}


// test
// let arr = [2, 6, 3, 9, 5, 1, 1, 0];
// console.log(bubbleSort(arr));

module.exports = bubbleSort;
