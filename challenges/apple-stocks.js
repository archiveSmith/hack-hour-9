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
'use strict';
function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) {
    return 0;
  }
  let greatest = -Infinity;
  let greatestIndex = -Infinity;
  let smallest = Infinity;
  let smallestIndex = -Infinity;

  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    if (stock_prices_yesterday[i] > greatest) {
      greatest = stock_prices_yesterday[i];
      greatestIndex = i;
    } else if (stock_prices_yesterday[i] < smallest) {
      smallest = stock_prices_yesterday[i];
      smallestIndex = i;
    }
  }
  if (greatestIndex > smallestIndex) {
    return 0;
  }
  return greatest - smallest;
}

var stocks = [];

stocks[30] = 50;
stocks[60] = 200;
stocks[90] = 100;
stocks[120] = 300;
stocks[150] = 300;
stocks[180] = 100;

console.log(bestProfit(stocks));

module.exports = bestProfit;
