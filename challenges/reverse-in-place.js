/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
  if (!Array.isArray(array)){
    return undefined;
  }
  
  var counter = array.length-1;
  var halfArrayLength = Math.floor(array.length / 2);
  
  for (var i = 0;i < halfArrayLength ;i++){
    var tempMoving = array[i];
    
    array[i] = array[counter];
    array[counter] = tempMoving;
    counter--;
  }
  return array;
}

module.exports = reverseInPlace;