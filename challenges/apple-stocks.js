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
  if (!Array.isArray(stock_prices_yesterday) || stock_prices_yesterday.length < 2) {
    return 0;
  }
  const calc = stock_prices_yesterday.reduce((memo, item, index) => { 
     if (item > memo.high) {

       memo.high = item;
       let diff = memo.high - memo.low
       if (diff > memo.profit && diff > 0) {
         memo.profit = memo.high - memo.low;
       }
    }
    if (item < memo.low) {
      memo.low = item;
      memo.high = item;
     }
    return memo;
   
  }, { profit: 0, low: stock_prices_yesterday[0], high: 0 });
  return (calc.profit> 0 ) ? calc.profit : 0;

}

module.exports = bestProfit;
