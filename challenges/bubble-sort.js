// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    for (var i = (array.length - 1); i >= 0; i--) {
        for (var j = (array.length - i); j > 0; j--) {
            if (array[j] < array[j - 1]) {
                let tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
