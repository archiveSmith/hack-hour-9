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

function bestProfit(stock_prices_yesterday) {
  if (stock_prices_yesterday.constructor !== Array) {
    return 0;
  }
  let Profit = -Infinity;
  stock_prices_yesterday.forEach((price, index) => {
    for (let j = index + 1; j < stock_prices_yesterday.length; j++) {
      if (stock_prices_yesterday[j] - price > Profit) {
        Profit = stock_prices_yesterday[j] - price;
      }
    }
  });
  if (Profit <= 0) {
    return 0;
  }
  return Profit;
}

// testing
// const stock_prices_yesterday = [4, 5, 7, 9, 1, 0];
// console.log('output should be 5: ', bestProfit(stock_prices_yesterday));

module.exports = bestProfit;
