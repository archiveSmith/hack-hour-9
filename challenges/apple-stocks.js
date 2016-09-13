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
function bestProfit(stocks) {
	let lowestPrice = stocks[0];
	let profit = 0;

	for (let i = 1; i < stocks.length; i++) {
		lowestPrice = Math.min(lowestPrice, stocks[i]);
		profit = Math.max(profit, stocks[i] - lowestPrice);
	}
	return profit;
}  
		

let day1 = [500, 400, 600, 700, 800, 600, 900, 200]; //500 profit
//let day1 = [500, 400, 300, 200, 100]; //no profit
//let day1 = [500, 500, 500, 500]; //no profit
//let day1 = []; // 0
bestProfit(day1);

module.exports = bestProfit;
