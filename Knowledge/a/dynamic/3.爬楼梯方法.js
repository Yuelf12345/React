/**
 * 给定一个共有n阶的楼梯，你每步可以上 1 阶或者 2 阶，请问有多少种方案可以爬到楼顶？
 * 
 * dp[n] = dp[n-2]+dp[n-1]
 * 
 */

function climbingStairsBacktrack(n) {
    if (n <= 2) return n;
    const dp = [1, 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    return dp[n - 1]
}

console.log(climbingStairsBacktrack(3)); // 3
console.log(climbingStairsBacktrack(4)); // 5
console.log(climbingStairsBacktrack(5)); // 8
console.log(climbingStairsBacktrack(10)); // 89
