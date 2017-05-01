/* You are given a NxN grid of elements represented by a 2D griday. The ith nested griday represents 
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
  for (let i = 0, len = grid.length; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      //store top
      let top = grid[i][j];
     //moves left to top
      grid[i][j] = grid[len - j - 1][i];
      //move bottom to left
      grid[len - j - 1][i] = grid[len - i - 1][len - j - 1];
     //move right to bottom
      grid[len - i - 1][len - j - 1] = grid[j][len - i - 1];
      // move top to right
      grid[j][len - i - 1] = top;
    }
  }
  return grid;
};

module.exports = rotateGrid;
