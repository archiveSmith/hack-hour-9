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
// 'use strict';
function rotateGrid(grid, n) {
  //no in place
  const newGrid = [];
  for (let i = 0; i < n; i++) {
    newGrid.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      newGrid[i].push(grid[j][i]);
    }
  }

  return newGrid;
}

// let array1 = [[1]];
// let array2 = [[1, 2], [3, 4]];
// let array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let array4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
// let array5 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];

// console.log(rotateGrid(array3, 3));

module.exports = rotateGrid;
