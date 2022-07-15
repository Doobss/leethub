/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
//     let prev = 0;
//     let sum = 1;
//     while(n--) {
//         let valueHolder = sum;
//         sum+= prev
//         prev = valueHolder
//     }
    
//     return sum
    
    let store = Array(n + 1).fill(-1)
    const countSteps = (ind = 0) => {
        if(ind>n) return 0;
        if(ind === n-1 || ind === n) return 1
        let stored = store[ind]
        if(stored !== -1) {
            return stored
        }
        else {
            let countedSteps = 0;
            countedSteps += countSteps(ind + 1)
            countedSteps += countSteps(ind + 2)
            store[ind] = countedSteps
            return countedSteps
            
        }
    }
    
    return countSteps()
    
};
