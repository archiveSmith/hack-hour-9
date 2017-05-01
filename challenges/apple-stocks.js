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
	if (!Array.isArray(stock_prices_yesterday)) {
		return 0;
	}
	
	let arr = stock_prices_yesterday;
	let currMin = arr[0];
	let len = arr.length;
	let diffArr = [];
	let maxProfit = 0;
	
	for (let i = 0; i < len; i++) {
		//check for invalid input
		if (typeof arr[i] != 'number' || arr[i] < 0) {
			return 0;
		}
		
		//store value of lowest min so far
		if (arr[i] < currMin) {
			currMin = arr[i];
		}		
		
		//store differences in new Array
		diffArr.push(arr[i] - currMin);
		
		//store maxProfit so far
		if (arr[i] - currMin > maxProfit) {
			maxProfit = arr[i] - currMin;
		}
	}
	
	if (maxProfit > 0) {
		return maxProfit;
	} else {
		return 0;
	}
}

//track lowest value so far and calculate difference as you iterate. keep lowest value updated. store differences in new array. 
module.exports = bestProfit;
