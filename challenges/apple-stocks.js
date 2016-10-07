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

function bestProfit(prices) {
if(!prices) return 0; 
let buyPoint = prices[0];
let sellPoint;
let profit = 0; 
for(let i = 0; i < prices.length - 1; i++) {
	sellPoint = prices[i + 1];
	
	if(buyPoint > sellPoint) {
		buyPoint = sellPoint;
	} 
	else if(sellPoint > buyPoint) {
		let temp = sellPoint - buyPoint;
		if(profit < temp) {
			profit = temp; 
		}
	}
}
return profit; 
function bestProfit(stock_prices_yesterday) {

}

module.exports = bestProfit;
