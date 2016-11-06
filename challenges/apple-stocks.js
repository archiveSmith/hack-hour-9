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

// function bestProfit(stock_prices_yesterday){
// 	if(Array.isArray(stock_prices_yesterday)) {
// 		let maxDiff = 0;
// 		let currentDiff = 0;
// 		let length = stock_prices_yesterday.length;
// 		for (let i = 0; i < length; i++){
// 			for (let j = i ; j < length ; j++){
// 				currentDiff = stock_prices_yesterday[j] - stock_prices_yesterday[i];
// 				if (currentDiff > maxDiff){
// 					maxDiff = currentDiff;
// 				}
// 			}
// 		}
// 		return maxDiff;
// 	}
// 	else return 0;
// }

function bestProfit(stock_prices_yesterday) {
    var low = stock_prices_yesterday[0];

    return stock_prices_yesterday.reduce((maxProfit, currStock) => {
        low = low < currStock ? low : currStock;
        return currStock - low > maxProfit ? currStock - low : maxProfit;
    }, 0);
}

module.exports = bestProfit;
