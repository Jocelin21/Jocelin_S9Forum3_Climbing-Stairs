function climbingStairs(cost) {
    cost.push(0)

    for (var i = (cost.length) - 3; i >= -1; i--){
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }

    return console.log(Math.min(cost[0], cost[1]));
}

climbingStairs([0, 2, 2, 1])
climbingStairs([0, 2, 3, 2])
climbingStairs([10, 15, 20])
climbingStairs([0, 0, 0, 0, 0, 0])
