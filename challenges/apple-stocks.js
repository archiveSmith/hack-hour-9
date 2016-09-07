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
    console.log('rtfm');
    return 0;
}
stock_prices_yesterday = stock_prices_yesterday.filter(x => x !== '' && Number.isInteger(x));
let maxProf = -Infinity, buyPrice = 0, sellPrice = 0;
let shouldBuy = true;
for(let i = 0;i<stock_prices_yesterday.length-1;i++){
    sellPrice = stock_prices_yesterday[i+1];
    if (shouldBuy) buyPrice = stock_prices_yesterday[i+1];
    if(sellPrice < buyPrice){
        shouldBuy = true;
    } else {
        let temp = sellPrice - buyPrice;
        if (temp > maxProf) maxProf = temp;
        shouldBuy = false;
    }
}

return maxProf;

}


module.exports = bestProfit;
