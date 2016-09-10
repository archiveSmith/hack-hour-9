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
   for (let currentRow = 0; currentRow < n / 2; currentRow++) {
     for (let currentCol = currentRow; currentCol < n - 1 - currentRow; currentCol++) {

       let rowIndex = currentRow;
       let colIndex = currentCol;
       let valueToInsert = grid[rowIndex][colIndex];
       let valueToKeep;
       for (let i = 0; i < 4; i++) {
         const {newRowIndex, newColIndex} = getNewPosition(rowIndex, colIndex, n);
         valueToKeep = grid[newRowIndex][newColIndex];
         grid[newRowIndex][newColIndex] = valueToInsert;

         rowIndex = newRowIndex;
         colIndex = newColIndex;
         valueToInsert = valueToKeep;
       }
     }
   }

   return grid;
 }

function getNewPosition(rowIndex, colIndex, n) {
  const newRowIndex = colIndex;
  const newColIndex = n - 1 - rowIndex;

  return {newRowIndex, newColIndex}
}

module.exports = rotateGrid;
