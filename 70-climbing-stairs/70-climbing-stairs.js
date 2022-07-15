/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let prev = 0;
    let sum = 1;
    while(n--) {
        let valueHolder = sum;
        sum+= prev
        prev = valueHolder
    }
    
    return sum
};
