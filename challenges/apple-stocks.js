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
	// in general, the best profit is made by buying at lowest price and selling at highest price
	// but timining comes into play - could only sell at a time AFTER buy

	// so a simple algorithm would be (but not too efficient):
		// start at beginning of array, at element i, compute the difference of i+1 and i, up to array length and store this difference in an array
		// after get all the possible differences, find the max difference from the array values and return that
	
	
	// check for invalid input
	if((! stock_prices_yesterday) || (stock_prices_yesterday.length === 0)) {
		return 0;
	}
	
	var profits = [];
	
	for(var i = 0; i < stock_prices_yesterday.length; i++) {
		var buy = stock_prices_yesterday[i];
		
		for(var j = i + 1; j < stock_prices_yesterday.length; j++) {
			var sell = stock_prices_yesterday[j];
			profits.push(sell - buy);
		}
	}
	
	var maxProfit = profits.reduce(function(prev, curr) {
		return curr > prev ? curr : prev;
	}, 0);

	return maxProfit;
}

/* tests */
/*
var apple_stock1 = [100, 150, 200];
console.log(bestProfit(apple_stock1));
console.log(bestProfit());
console.log(bestProfit([]));

var apple_stock2 = [300, 100, 150, 250, 200];
console.log(bestProfit(apple_stock2));

var apple_stock3 = [300, 250, 200, 150, 100];
console.log(bestProfit(apple_stock3));
*/

module.exports = bestProfit;
