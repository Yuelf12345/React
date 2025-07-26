/**
 * 数组的每个下标作为一个阶梯，第i个阶梯对应着一个非负数的体力花费值 cost[i] （下标从 0 开始）。每当爬上一个阶梯，都要花费对应的体力值，一旦支付了相应的体力值，就可以选择 向上爬一个阶梯 或者 爬两个阶梯。求找出达到楼层顶部的最低花费。在开始时，可以选择从下标为 0 或 1 的元素作为初始阶梯。
  样例输入： cost=[1,99,1,1,1,99,1,1,99,1]
  样例输出： 6
  样例输入：cost = [2,2,4,2,2,4,2,4,2]
  样例输出： 10

  [1,2,3,...,i-1,i,...,n]
  dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i]
  即：要么从i-1跳到i，要么从i-2跳到i
 */

function minCost(cost) {
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  const dp = [cost[0], Math.min(cost[0], cost[1])];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[cost.length - 1];
}
console.log(minCost([1, 99, 1, 1]));
console.log(minCost([1, 99, 1, 1, 1, 99, 1, 1, 99, 1]));
console.log(minCost([2, 2, 4, 2, 2, 4, 2, 4, 2]));
