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
  //check items exist
 if (!items.length || !weightAvailable) {
   return 0;
 }
 const numsCombo = Math.pow(2, items.length);
 let maxVal = 0;
 //iterate through every combo of objects
 for (let i = 0; i < numsCombo; i++) {
   //check weight if weight <= maxweight && that curr val > max val
   let binNum = padWithZeros(i.toString(2), items.length);
   let currVal = 0;
   let currWeight = 0;
   for (let j = 0; j < items.length; j++) {
     if (binNum[j] === '1') {
       currVal += items[j].value;
       currWeight += items[j].weight;
     }
   }
   //update max val
   if (currWeight <= weightAvailable && currVal > maxVal) {
     maxVal = currVal;
   }
 }
 return maxVal;
}

function padWithZeros(baseNum, length) {
 while (baseNum.length < length) {
   baseNum = '0' + baseNum;
 }
 return baseNum;
}

module.exports = solveKnapsack;
