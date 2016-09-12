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


/* KEY IDEA
We have to find the largest difference between 2 numbers in the array but the first number has to be lower
*/



function bestProfit(stock_prices_yesterday) {
    if(stock_prices_yesterday.length === 0) return 0;


    var maxProfit = 0;

    // go through every price and time
    for (var earlierTime = 0; earlierTime < stock_prices_yesterday.length; earlierTime++) {
        var earlierPrice = stock_prices_yesterday[earlierTime];

        // and go through all the LATER prices
        for (var laterTime = earlierTime + 1; laterTime < stock_prices_yesterday.length; laterTime++) {
            var laterPrice = stock_prices_yesterday[laterTime];

            // see what our profit would be if we bought at the
            // min price and sold at the current price
            var potentialProfit = laterPrice - earlierPrice;

            // update maxProfit if we can do better
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }

    return maxProfit;
}

module.exports = bestProfit;


