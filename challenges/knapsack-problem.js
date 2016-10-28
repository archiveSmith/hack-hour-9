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
  // for each combination of items that fits in the knapsack, what is the maximum value
  const comboweights = [];
  const combovalues = [];
  //find all the combinations that fit in the knapsack
  //find all combinations, then eliminate those that weigh too much
  

  //then out of the remaining combinations, pick the combo with the max value


};

module.exports = solveKnapsack;
