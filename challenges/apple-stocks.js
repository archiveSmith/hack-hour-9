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
  	
  	return 0 };

  let highestPrice = stock_prices_yesterday[0];
  let highestIndex = 0;
  let lowestPrice = stock_prices_yesterday[0];
  let lowestIndex = 0;
  let diff = 0;

  for (var i = 1; i < stock_prices_yesterday.length; i++) {
    
    if (stock_prices_yesterday[i] > highestPrice) {
      highestIndex = i;
      highestPrice = stock_prices_yesterday[i];
    } else if (stock_prices_yesterday[i] < lowestPrice) {
      lowestIndex = i;
      lowestPrice = stock_prices_yesterday[i];
    }
    console.log('highestIndex' , highestIndex)
    console.log('lowestIndex' , lowestIndex)
  }
	
	if (highestPrice - lowestPrice > diff){
		diff = highestPrice - lowestPrice;
	}
	
  if (highestIndex < lowestIndex) {
    return 0;
  } else {
    return highestPrice - lowestPrice;
  }
}
// console.log(bestProfit([4,5,3,2,3,4,5,6,7,8,9,0,1,5,3,5,6,8]))
module.exports = bestProfit;
