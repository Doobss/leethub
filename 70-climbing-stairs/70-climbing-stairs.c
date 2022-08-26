
int climbStairs(int n) {
    int prev = 0, sum = 1, swap;
    while(n--) {
        swap = sum;
        sum+= prev;
        prev = swap;
    }
    return sum;
}