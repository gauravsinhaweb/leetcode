/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let minPrice = prices[0]
let maxProfit = 0

for (var i = 0; i < prices.length; i++) {
  const currentPrice = prices[i] 
  const currentProfit = currentPrice - minPrice
  if(minPrice > currentPrice){
    minPrice = currentPrice
  }
  if(currentProfit > maxProfit){
    maxProfit = currentProfit
  }
}
  return (maxProfit)
    };