// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  var counter = 0;
  var splitted;
  for (var i = 0; i <= num; i++){
    if (i === 2){
      counter++;
    }
    if (i >= 10) {
      splitted = i.toString().split('');
      splitted.forEach(function(x){
        if (x === '2'){
          counter++;
        }
      });
    } 
  }
  return counter;
  //increment num by 1 until you hit num
  //split each number into single digits
  //if one of those digits is 2, increment the counter 
  //return counter
}

module.exports = countTwos;