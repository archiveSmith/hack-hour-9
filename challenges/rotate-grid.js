/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let result = [];
  let row1 = [];
  let row2 = [];
  let row3 = [];
  let conter = n-1;


  // do {
  //   let row = [];
  //   first = 0;
  //   last = n-1;
  // } while (n < 0){
  //   console.log(first,last,n);
  //   row.push(grid[n-1][first]);  
  //   last--;
  //   first++;
  //   console.log(row, result);

  //   if (last === 1) {
  //     result.push(row);
  //   }  
  // }

  // // for (let i = 0; i < n; i++) {
  // //   let row = [];
  // //   row.push(grid[counter][i]);
  // //   counter--;
  // //   if (i === counter) {
  // //     result.push(row);
  // //     counter = n-1;
  // //   }  
  // // }

  // return result;

  // row1.push(grid[2][0]);
  // row1.push(grid[1][0]);
  // row1.push(grid[0][0]);

  // row2.push(grid[2][1]);
  // row2.push(grid[1][1]);
  // row2.push(grid[0][1]);

  // row3.push(grid[2][2]);
  // row3.push(grid[1][2]);
  // row3.push(grid[0][2]);
  
  // result.push(row1,row2,row3);

  return result;

}

module.exports = rotateGrid;
