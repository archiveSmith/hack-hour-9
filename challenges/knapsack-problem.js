/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  function findMaxValue(items, weightLeft, curValue) {
    if (weightLeft < 0) return 0;
    if (items.length === 0) return curValue;
    return Math.max(
      findMaxValue(items.slice(1), weightLeft - items[0].weight, curValue + items[0].value),
      findMaxValue(items.slice(1), weightLeft, curValue));
  }
  return findMaxValue(items, weightAvailable, 0);
}

module.exports = solveKnapsack;
