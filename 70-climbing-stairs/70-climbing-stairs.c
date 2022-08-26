// int visited[47];
// void fill()
// {
//   int i = 47;
//   while (i--) visited[i] = 0;
//   return;
// }
    // total_calls++;
    // visited[n]++;
    // if (visited[46] != 0) fill();
    // printf("n = %d v = %d t = %d s = %d \n", n, visited[n], total_calls, steps); 



int climbStairs(int n) {
    int prev = 0, sum = 1, swap;
    while(n--) {
        swap = sum;
        sum+= prev;
        prev = swap;
    }
    return sum;
}