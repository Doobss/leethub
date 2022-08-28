#define MAX_VALUE 10001
#define MAX(a, b)(((a) >= (b) ? (a) : (b)))

int* store[MAX_VALUE]; 
// after preprocess this is sorted matrix (m x 2, where m = unique indicies) 
//   store[m][1] = index value
//   store[m][0] = number of times this index occured 
int store_length = MAX_VALUE;
int* calculated;  // used to store previously calculated max values
int initalized = 0; 


void clear_store() {
  int i = MAX_VALUE;
  if (initalized) {
    while(i--) {
      store[i][0] = 0; // number of occurances
      store[i][1] = i; // index to keep track after filtering down
    }
  } else {
    initalized++;
    while(i--) {
      store[i] = (int*) calloc(2, sizeof(int));
      store[i][1] = i;
    }
  }
}



int filter_store(int removed_int) { // filters out all store[m][0] = removed_int;
    int new_length = 0;
    for(int i = 0; store_length > i; i++) {
      int* store_vals = store[i];
        if (store_vals[0] != removed_int)  {
            store[new_length][0] = store_vals[0];
            store[new_length][1] = store_vals[1];
            new_length++;
        }
    }
    return new_length;
}





void preprocess(int* starting_array, int array_length) {
  store_length = MAX_VALUE;
  clear_store();
  int i = array_length;
  while (i--) {
        store[starting_array[i]][0] += store[starting_array[i]][1];
  }
  store_length = filter_store(0);
  calculated = (int*) calloc((unsigned long) store_length, sizeof(int));
  return;
}


int compute(int indx) {
  if (indx >= store_length) return 0;
  if(calculated[indx] != 0) return calculated[indx]; // return previous calculation

  if (store[indx][1] + 1 != store[indx + 1][1]) {
    calculated[indx] = store[indx][0] + MAX(compute(indx + 1), compute(indx + 2));
  } else {
    calculated[indx] = store[indx][0] + MAX(compute(indx + 2), compute(indx + 3));
  }
  return calculated[indx];
}


int deleteAndEarn(int* nums, int numsSize) {
  preprocess(nums, numsSize);
  if (2 > store_length) return store[0][0] ;
  // free(calculated);
  return MAX(compute(0), compute(1));;
}