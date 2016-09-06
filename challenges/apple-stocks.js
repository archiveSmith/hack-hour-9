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
  if (!stock_prices_yesterday){
    return 0;
  }
  let peaks = {};
  let lows = {};
  let slope;
  var listLength = (stock_prices_yesterday.length)-1;
  lows['0'] =  stock_prices_yesterday[0];
  peaks[listLength] = stock_prices_yesterday[listLength];
  for(let i = 1; i<stock_prices_yesterday.length; i++){
	   if(stock_prices_yesterday[i] < stock_prices_yesterday[i-1]){
      if (slope > 0){
        peaks[i-1]= stock_prices_yesterday[i-1];
      }
      slope = -1;
    }
    if(stock_prices_yesterday[i] > stock_prices_yesterday[i-1]){
      if (slope < 0){
      	let newIndex = i-1;
        lows[newIndex]= stock_prices_yesterday[i-1];
      }
      slope = 1;
  	}
	}
	var highDiff = 0;
	for(highkey in peaks){
		for(lowkey in lows){
			if(peaks[highkey] - lows[lowkey] > highDiff && highkey > lowkey){
				highDiff = peaks[highkey] - lows[lowkey];
				
			}
		}
	}
	return highDiff;
}

module.exports = bestProfit;
