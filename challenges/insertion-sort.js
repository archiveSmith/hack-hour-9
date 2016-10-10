// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (array.length === 0 || array.length === 1) return array;

  let result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    let currItem = array[i];

    for (let j = 0; j < result.length; j++) {
      if (currItem <= result[j]) {
        result.splice(j,0,currItem);
        break;
      } else if (j === result.length - 1) {
        result.push(currItem);
        break;
      }
    }
  }
  return result;
}

module.exports = insertionSort;