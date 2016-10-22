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
  const output = [];
  if(numRows < 1 || !numRows){
    return output;
  }
  for(let i = 0; i < numRows; i ++){
    //each row
    const row = []
    row.push(1);
    if(output[i-1]){
      for(let j = 0; j < i; j++){
        let nextnum = output[i-1][j+1];
        if(isNaN(nextnum)){
          row.push(1);
        }
        else{
          row.push(output[i-1][j] + nextnum);
        }
      }
      row.push()
    }
    output.push(row)
  }
  return output;
}
console.log(pascalTriangle(5))


// module.exports = pascalTriangle;
