function highestProduct(array) {

  if (array.length >= 3) {
    array.sort( (a, b) => a - b);
    
    let option1 = array[0] * array[1] * array[array.length-1];
    let option2 = array.slice(-3).reduce( (a,b) => a * b);

    return Math.max(option1,option2)
  } 

  return "Array not length of 3, yo!"
}

highestProduct([10,-9, -9, -11, 10, 5,4,3,2,1, -12]);


module.exports = highestProduct;
