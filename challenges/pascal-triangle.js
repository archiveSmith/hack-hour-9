/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  var final = [];
  var temp; //temp represents previous row
  //return [] if numRows is not a number >= 1
  if (typeof(numRows) !== 'number' || numRows < 1){
    return final;
  }
  
  for (var i = 0; i < numRows; i++){
    var row = [1];  //each row starts with 1
    if (i <= 1){
      if (i === 0) {
        temp = [1];
        final.push(temp);
      }
      if (i === 1) {
        temp = [1,1];
        final.push(temp);
      }
    } else {
      for (j = 0; j < temp.length-1; j++){
        row.push(temp[j] + temp[j + 1]);    //loop through temp and add the 1st & 2nd, 2nd & 3rd, etc
      }
      temp = row;
      row.push(1);  //each row ends with 1
      final.push(row);
    }
  }
  return final;
}

module.exports = pascalTriangle;
