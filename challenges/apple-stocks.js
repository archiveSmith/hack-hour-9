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
	if (stock_prices_yesterday.constructor !== Array){
		return 0;
	}
	let lrgProfit = 0;
	let currProfit = 0;
	for (var i = 0; i < stock_prices_yesterday.length; i++) {
		if (stock_prices_yesterday[i].constructor !== Number) {
			return 0;
		}
		//... is needed since it's a max of an array
		currProfit = Math.max(...stock_prices_yesterday.slice(i+1)) - stock_prices_yesterday[i];
		if (currProfit > lrgProfit) {
			lrgProfit = currProfit;
		}
	}
	return lrgProfit;
} 

module.exports = bestProfit;
