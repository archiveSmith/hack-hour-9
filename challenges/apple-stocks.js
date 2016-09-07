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
  if (typeof stock_prices_yesterday !== 'object') return 0;
  
  let max = 0;
  let min = 0;
  let bestProfit = 0;
  for (let key in stock_prices_yesterday) {
  	if (stock_prices_yesterday[key] > max) {
  		max = stock_prices_yesterday[key];
  	} else if (stock_prices_yesterday[key] < max && stock_prices_yesterday[key] > min) {
  		min = stock_prices_yesterday[key];
  	}
  }
  console.log(min,max)
}

bestProfit(50);
bestProfit({60:500, 10:510, 120: 490, 200:500, 400:210});

module.exports = bestProfit;
