/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

//not passing for large arrays

// function solveKnapsack(items, weightAvailable) {
//   let maxValue = 0;
//   function findMaxValue(index, weightLeft, curValue) {
//     if (weightLeft < 0) return;
//     if (!items[index]) {
//       if (curValue > maxValue) maxValue = curValue;
//       return;
//     }
//     findMaxValue(index + 1, weightLeft - items[index].weight, curValue + items[index].value);
//     findMaxValue(index + 1, weightLeft, curValue);
//   }
//   findMaxValue(0, weightAvailable, 0);
//   return maxValue;
// }
function solveKnapsack(items, weightAvailable, curValue = 0, index = 0) {
  if (weightAvailable < 0) return 0;
  if (!items[index]) return curValue
  return Math.max(
    solveKnapsack(items, weightAvailable - items[index].weight, curValue + items[index].value, index + 1),
    solveKnapsack(items, weightAvailable, curValue, index + 1));
}

module.exports = solveKnapsack;
