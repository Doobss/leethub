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
    if (robbed[house_indx] != -1) return robbed[house_indx];

    robbed[house_indx] = *(house_values + house_indx);
    if (2 >=  (number_of_houses - house_indx)) {
        return robbed[house_indx];
    }
    int house_max = max(find_houses(house_indx + 1), (robbed[house_indx] + find_houses(house_indx + 2)));
    int j = house_indx + 2;
    while ( number_of_houses > j ) {
      house_max = max(house_max,  (robbed[house_indx] + find_houses(j)));
      j++;
    }
    robbed[house_indx] = house_max;
    return robbed[house_indx];
}


int rob(int* nums, int numsSize) {
    if (2 > numsSize) return *(nums);
    fill();
    number_of_houses = numsSize;
    house_values = nums;
    return max(find_houses(0), find_houses(1));;
}
