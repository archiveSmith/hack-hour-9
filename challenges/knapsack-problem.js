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
  let output = 0;
  for (let i = 0; i < items.length; ++i) {
    let weightleft = weightAvailable - items[i].weight;
    let totalValue = items[i].value;
    for (let j = i + 1; j < items.length; ++j) {
      if (weightleft >= items[j].weight) {
        totalValue += items[j].value;
        weightleft -= items[j].weight;
      }
    }
    if (totalValue > output) output = totalValue;
  }
  return output;
}

module.exports = solveKnapsack;


// tests
// const items = [{ weight: 1, value: 3 }, { weight: 2, value: 4 }, { weight: 3, value: 5 }];
// console.log(solveKnapsack(items, 3), 'should be 7');
// console.log(solveKnapsack(items, 5), 'should be 9');
