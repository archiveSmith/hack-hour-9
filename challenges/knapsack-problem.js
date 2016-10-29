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
  let max = 0;
  items = items.filter((element) => {
    return element.weight <= weightAvailable;
  }).sort((a,b) => {
    return b.value - a.value;
  });
  
  for(let i = 0; i < items.length; i += 1) {
    let wLimit = 0;
    let count = 0;
    for(let j = i; j < items.length; j += 1) {
        wLimit += items[j].weight; 
        if(wLimit <= weightAvailable) {
          count += items[j].value;
          if(count > max) {
            max = count; 
          }
        } else {
          break; 
        }
    }
  }
  return max; 
};

module.exports = solveKnapsack;
