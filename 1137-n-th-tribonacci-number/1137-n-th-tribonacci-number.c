

int sum(int* value_array)
{
    int i = 0, sum = 0;  
    while (3 > i)
    {
        sum += *(value_array + i);
        i++;
    }
    return sum;
};

int tribonacci(int n){
    if (n == 0) return 0;
    int prev_values[3] = {0, 0, 1}; 
    int current_n = 0;
    while (--n)
    {
        current_n = sum(&prev_values);
        prev_values[0] = prev_values[1];
        prev_values[1] = prev_values[2];
        prev_values[2] = current_n;
    }
    return prev_values[2];
}