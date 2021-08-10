/*
Best Time to Buy and Sell Stock II

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

-----------------SOLUTION STEPS----------------


-----------------COMPLEXITY----------------
Time Complexity : O(n)
Space Complexity: O(1)
*/

var maxProfit = function (prices) {
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    // Add to the max profit total if the current price is greater than previous
    // We "sell" when the the opposite is true because we will not buy on days that dip.
    if (prices[i] > prices[i - 1])
      // Add the increse in price to our profit
      maxprofit += prices[i] - prices[i - 1];
  }
  return maxprofit;
};

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
