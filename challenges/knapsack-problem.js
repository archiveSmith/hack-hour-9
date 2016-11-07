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
  // console.log(items)
  // console.log(items[0]["weight"])
  let value = 0;
  let currentWeight;
  
  for(let index = items.length-1; index > 0; index--){
  	// console.log(index)
  	if(weightAvailable >= items[index]["weight"]){
  		// console.log("weightAvailable", weightAvailable)
  		// console.log("curr item weight ", items[index]["weight"])
  		value += items[index]["value"];
  		weightAvailable -= items[index]["weight"];
  	}
  }
  // console.log('max value ', value)
};

module.exports = solveKnapsack;
