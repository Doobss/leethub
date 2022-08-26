

int fib(int n){
    int last, current, sum;
    sum = 0;
    current = 1;
    while (n--) 
    {
        last = sum;
        sum += current;
        current = last;
    }
    return sum;
}