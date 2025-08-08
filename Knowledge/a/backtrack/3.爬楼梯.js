/**
 * 给定一个共有n阶的楼梯，你每步可以上 1 阶或者 2 阶，请问有多少种方案可以爬到楼顶？
 * 
 */



function climbingStairsBacktrack(n) {
    const state = 0
    const choices = [1, 2]
    let res = 0
    function backtrack(state, choices) {
        // 符合，记录结果
        if (state === n) {
            res++
            return

        }
        for (let choice of choices) {
            if (state + choice > n) continue;
            backtrack(state + choice, choices)
        }
    }
    backtrack(state, choices)
    return res
}

console.log(climbingStairsBacktrack(3)); // 3
console.log(climbingStairsBacktrack(4)); // 5
console.log(climbingStairsBacktrack(5)); // 8
console.log(climbingStairsBacktrack(10)); // 89
