// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  // start from the second item in array
  for(var i = 1; i < array.length; i++) {
    var temp = array[i];

    // compare to items before index (which are sorted)
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];      
    }
    array[j+1] = temp;  // place item in correct location
  }
  return array;
};

module.exports = insertionSort;