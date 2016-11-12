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
  if (items.length === 0 || weightAvailable === 0) return 0;
  if (items[0].weight > weightAvailable) {
    return solveKnapsack(items.slice(1), weightAvailable);
  }
  else {
    let left = items.slice(1);
    let takeItem = items[0].value + solveKnapsack(left, weightAvailable - items[0].weight);
    let leaveItem = solveKnapsack(left, weightAvailable);
    return (takeItem > leaveItem) ? takeItem : leaveItem;
  }
}

module.exports = solveKnapsack;
