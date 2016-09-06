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
 	if (!Array.isArray(stock_prices_yesterday)) return 0;
 	if (!stock_prices_yesterday.every(price => typeof price === 'number')) return 0;
 	if (!stock_prices_yesterday.every(price => !isNaN(price))) return 0;
 	if (!stock_prices_yesterday.every(price => price >= 0)) return 0;

   let maxAfterThis = 0;
   let bestSoFar = 0;

   for (let i = stock_prices_yesterday.length - 1; i >= 0; i--) {
     let thisPrice = stock_prices_yesterday[i];

     if (thisPrice > maxAfterThis) maxAfterThis = thisPrice;
     if (maxAfterThis - thisPrice > bestSoFar) bestSoFar = maxAfterThis - thisPrice;
   }

   return bestSoFar;
 }

module.exports = bestProfit;
