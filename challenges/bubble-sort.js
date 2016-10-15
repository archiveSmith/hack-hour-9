// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    for (var i = (array.length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (array.length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (array[j] < array[j - 1]) {
                //Swap the numbers
                let tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
}

module.exports = bubbleSort;
