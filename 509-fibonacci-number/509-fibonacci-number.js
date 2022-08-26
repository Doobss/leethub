/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let last, current, sum;
    sum = 0;
    current = 1;
    while (n--) 
    {
        last = sum;
        sum += current;
        current = last;
    }
    return sum;
};
