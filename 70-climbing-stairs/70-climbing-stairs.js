/**
 * @param {number} n
 * @return {number}
 */



// function distWays(indx,n,dp){
//     if(indx>n) return 0;
//     if(indx===n-1 || indx===n) return 1;
    
//     if(dp[indx]!==-1) return dp[indx];
//     let onestep=distWays(indx+1,n,dp);
//     let twoStep=distWays(indx+2,n,dp);
    
//     return dp[indx]=onestep+twoStep;
// }
// var climbStairs = function(n) {
    
//     let dp=Array(n+1).fill(-1);
//     return distWays(0,n,dp);
// };

var climbStairs = function(n) {
    
    let prev = 0;
    let sum = 1;
    while(n--) {
        let valueHolder = sum;
        sum+= prev
        prev = valueHolder
    }
    
    return sum
}
    
//     let store = Array(n + 1).fill(-1)
//     const countSteps = (ind = 0) => {
//         if(ind>n) return 0;
//         if(ind === n-1 || ind === n) return 1
//         let stored = store[ind]
//         if(stored !== -1) {
//             return stored
//         }
//         else {
//             let countedSteps = 0;
//             countedSteps += countSteps(ind + 1)
//             countedSteps += countSteps(ind + 2)
//             store[ind] = countedSteps
//             return countedSteps
            
//         }
//     }
    
//     return countSteps()
    
// };
