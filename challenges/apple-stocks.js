/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// function bestProfit(stock_prices_yesterday) {
//   if (!Array.isArray(stock_prices_yesterday)) {
//     return 0
//   }
//     let profit = 0;
//     for (var i = 0; i < stock_prices_yesterday.length; i++) {
//       for (var j = i; j < stock_prices_yesterday.length; j++) {
//         if (stock_prices_yesterday[j]-stock_prices_yesterday[i] > profit) {
//           profit = stock_prices_yesterday[j]-stock_prices_yesterday[i];
//         }        
//       }
//     }
//     return profit;
// }

function bestProfit(stock_prices_yesterday) {
  var maxProfit = 0;
  var possibleProfit = 0;
  var minI = 0, maxI = 0;
  if (stock_prices_yesterday) {
    //loop through array.
    for (var i = 0; i < stock_prices_yesterday.length; i++) {
      //if current value is lower than current lowest minI
      if (stock_prices_yesterday[i] < stock_prices_yesterday[minI]) {
        //log the index of the smallest value to var. 
        minI = i;
      }

      //possible profit is the current value minus the latest known smallest value. 
      possibleProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];

      //check if possible profit is greater than maxprofit. if possible profit is greater than max profit, update max profit. 
      if (possibleProfit > maxProfit) {
        maxProfit = possibleProfit;
        maxI = i;
      }
    }
  }
  return maxProfit;
}

module.exports = bestProfit;
