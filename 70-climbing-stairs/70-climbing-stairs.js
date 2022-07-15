/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let prev = 0;
    let sum = 1;
    while(n--) {
        let valueHolder = sum;
        sum+=prev
        prev = valueHolder
    }
    return sum
};


    
//     var countSteps = (stepsLeft = n) => {
//         let numberOfSteps = 0;
        
//         if(!stepsLeft) {
//             return 1
//         }
//         else {
//             let nextStep = stepsLeft
//             numberOfSteps += countSteps(nextStep - 1)
//             nextStep--
//             if(nextStep) {
//                 numberOfSteps += countSteps(nextStep - 1)
//             }
//             return numberOfSteps
//         }
//     }
//     return countSteps()