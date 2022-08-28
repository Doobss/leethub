int robbed[101];
void fill() {
  int i = 101;
  while (i--) robbed[i] = -1;
}

int* house_values;
int number_of_houses;


int max(int a, int b) {
    return (a >= b) ? a : b;
};

int find_houses(int house_indx) {
    if (house_indx > number_of_houses - 1) return 0;
    if (robbed[house_indx] != -1) return robbed[house_indx];

    int house_max = max(*(house_values + house_indx), find_houses(house_indx + 1));
    int j = house_indx + 2;
    while ( number_of_houses > j ) {
      house_max = max(house_max,  (*(house_values + house_indx)+ find_houses(j)));
      j++;
    }
    robbed[house_indx] = house_max;
    return house_max;
}


int rob(int* nums, int numsSize) {
    if (2 > numsSize) return *(nums);
    number_of_houses = numsSize;
    house_values = nums;

    // circular
    fill();
    number_of_houses--;
    int no_end = find_houses(0);
    fill();
    number_of_houses++;
    int no_start = find_houses(1);
    return max(no_end, no_start);

    // non-circular
    // fill();
    // return find_houses(0);
}
